import { useRef, useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  // Refs for cursor Elemen
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  const iscursorMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  if (iscursorMobile) {
    return null;
  }

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Inisial position cursor on screen
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    // Variable  cursor dengan efek kecepadan yang berbeda
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power.out",
    });

    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    // Menghubungkan efek dengan cursornya
    const handlerMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // Mouse handler Move
    // meberitau mouse bergerak kemana
    window.addEventListener("mousemove", handlerMouseMove);

    // Klik Animatin
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        rotate: 135,
        duration: 0.3,
      });

      document.addEventListener("mouseup", () => {
        gsap.to([cursor, cursorBorder], {
          scale: 1,
          rotate: 45,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <>
      {/* Cursor Dalem */}

      <dev
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px]
  bg-white rotate-45 pointer-events-none z-[999] mix-blend-difference"
      />
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border  border-white rotate-45 
        pointer-events-none z-[999] mix-blend-difference opacity-50 "
      />
    </>
  );
};

export default CustomCursor;
