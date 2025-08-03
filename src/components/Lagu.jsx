import React, { useState, useRef, useEffect } from "react";
import { dblagu } from "../data/dblagu.js";

// Tambahkan CSS untuk animasi putar di sini
// Kamu bisa meletakkannya di file CSS global atau menggunakan styled-components
// Jika menggunakan Tailwind, kita bisa buatnya di tailwind.config.js atau di file CSS tambahan
const rotatingImageStyle = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Lagu = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dblagu.length);
    setCurrentSongIndex(randomIndex);

    const handleSongEnded = () => {
      handleNext();
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", handleSongEnded);
      audio.volume = 0.5;
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleSongEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && dblagu.length > 0) {
      audioRef.current.src = dblagu[currentSongIndex].audio;
      if (isPlaying) {
        audioRef.current.play().catch((e) => console.error("Play failed:", e));
      }
    }
  }, [currentSongIndex, isPlaying]);

  const handlePlayConfirmed = () => {
    setShowModal(false);
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((e) => {
        console.error("Play failed:", e);
        setIsPlaying(false);
      });
  };

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.error("Play failed:", e);
          setIsPlaying(false);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % dblagu.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + dblagu.length) % dblagu.length
    );
    setIsPlaying(true);
  };

  if (dblagu.length === 0) {
    return (
      <div className="fixed bottom-4 right-4 z-50 p-4 rounded-xl shadow-2xl">
        Loading...
      </div>
    );
  }

  const currentSong = dblagu[currentSongIndex];

  return (
    <div>
      <style>{rotatingImageStyle}</style>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <p className="text-lg font-semibold mb-4 text-gray-800">
              Putar Musik Buat Kamu ?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Tidak
              </button>
              <button
                onClick={handlePlayConfirmed}
                className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
              >
                Ya, Putar Musik
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pemutar Musik untuk Desktop (muncul saat ukuran layar lg ke atas) */}
      <div className="fixed bottom-4 right-4 z-40 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-2 max-w-sm w-full md:w-[400px] hidden lg:flex">
        <img
          className="w-16 h-16 rounded-lg object-cover shadow-md"
          src={currentSong.image}
          alt="Foto lagu"
        />
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-gray-800 truncate">
            {currentSong.title}
          </div>
          <div className="text-sm text-gray-500 truncate">
            {currentSong.artist}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600 rotate-180"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14v-8l6 4-6 4z" />
            </svg>
          </button>
          <button
            onClick={handlePlayPause}
            className="bg-violet-500 hover:bg-violet-600 p-2 rounded-full transition-colors"
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14V8l6 4-6 4z" />
              </svg>
            )}
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14V8l6 4-6 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tampilan Mobile (muncul di bawah ukuran lg) */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <div
          onClick={handlePlayPause}
          className="relative w-16 h-16 cursor-pointer"
        >
          <img
            className={`w-full h-full rounded-full object-cover shadow-2xl transition-transform duration-500 transform ${
              isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
            }`}
            src={currentSong.image}
            alt="Foto lagu"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14V8l6 4-6 4z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default Lagu;
