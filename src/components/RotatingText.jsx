import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function to conditionally join Tailwind CSS classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// The RotatingText component (as provided by you, with minor adjustments for clarity)
const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters", // 'characters', 'words', 'lines', or custom string
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Function to split text into grapheme clusters for proper character handling (e.g., emojis)
  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }
    return Array.from(text);
  };

  // Memoize the elements to be rendered based on the current text and splitBy method
  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1, // Add space after word if not the last one
      }));
    }
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    if (splitBy === "lines") {
      return currentText.split("\n").map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1, // Lines typically don't need spaces between them
      }));
    }

    // Default split by custom string
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy]);

  // Calculate stagger delay for each character/element
  const getStaggerDelay = useCallback(
    (index, totalChars) => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      // If staggerFrom is a number, treat it as a specific index
      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  // Handler for changing the current text index
  const handleIndexChange = useCallback(
    (newIndex) => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  // Functions for imperative control (next, previous, jumpTo, reset)
  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop // If at the end, loop back to start if loop is true
          ? 0
          : currentTextIndex
        : currentTextIndex + 1; // Otherwise, go to next
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex =
      currentTextIndex === 0
        ? loop // If at the beginning, loop to end if loop is true
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1; // Otherwise, go to previous
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange]);

  // Expose imperative methods via ref
  useImperativeHandle(
    ref,
    () => ({
      next,
      previous,
      jumpTo,
      reset,
    }),
    [next, previous, jumpTo, reset]
  );

  // Auto-rotation effect
  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={cn(
        "flex flex-wrap whitespace-pre-wrap relative", // Base Tailwind classes for the container
        mainClassName // Additional classes passed via props
      )}
      {...rest}
      layout // Framer Motion layout animation
      transition={transition}
    >
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">{texts[currentTextIndex]}</span>

      {/* AnimatePresence for exit animations when text changes */}
      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.span
          key={currentTextIndex} // Key is crucial for AnimatePresence to detect changes
          className={cn(
            splitBy === "lines"
              ? "flex flex-col w-full" // For line-based splitting
              : "flex flex-wrap whitespace-pre-wrap relative" // For character/word splitting
          )}
          layout // Framer Motion layout animation
          aria-hidden="true" // Hide from screen readers as sr-only span handles it
        >
          {elements.map((wordObj, wordIndex, array) => {
            // Calculate total characters before current word for stagger delay
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);

            // Render each word/part
            return (
              <span
                key={wordIndex}
                className={cn("inline-flex", splitLevelClassName)}
              >
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex} // Key for each character/element for animation
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce(
                          (sum, word) => sum + word.characters.length,
                          0
                        )
                      ),
                    }}
                    className={cn("inline-block", elementLevelClassName)} // Base and prop-defined classes for each animated element
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Add space between words if needed */}
                {wordObj.needsSpace && (
                  <span className="whitespace-pre"> </span>
                )}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";

// Simulate a database file (textdb.js)
// In a real application, you would fetch this data from a backend API or a proper database.
import { dynamicTextsFromDB } from "../data/TextRotation";

// Main App component to demonstrate usage
export default function App() {
  // Extract only the text strings from the database array
  const textsForAnimation = useMemo(
    () => dynamicTextsFromDB.map((item) => item.text),
    []
  );

  return (
    <div className="lg:px-[0px] ">
      <RotatingText
        texts={textsForAnimation} // Using texts from the simulated DB
        mainClassName="
              sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2
              text-white
              md:bg-gradient-to-r from-purple-400/50 to-violet-500/20 rounded-xl
              overflow-hidden
              inline-flex items-center justify-center
              text-3xl  sm:text-3xl md:text-7xl font-bold
            "
        staggerFrom={"first"}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        staggerDuration={0.03}
        splitLevelClassName="overflow-hidden pb-0.5"
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        rotationInterval={2500}
        splitBy="words"
      />
    </div>
  );
}
