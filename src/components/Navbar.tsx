'use client'

import { BurguerIcon, DownloadIcon } from "pixicons";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  function toggleAudioIndicator() {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    if (backgroundMusicRef.current) {
      if (isAudioPlaying) {
        backgroundMusicRef.current.play();
      } else {
        backgroundMusicRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = 0.2;
    }
  }, []);

  return (
    <>
      <nav className="floating-menu text-black mx-auto border-4 border-black bg-white">
        <a
          className="inline-flex justify-center h-full items-center bg-black text-white border-black relative px-4 gap-2"
          download={"/michellcastillo.pdf"}
          href="/michellcastillo.pdf"
          title="Download cv"
        >
          <DownloadIcon className="w-8 h-8" />
        </a>
        <button
          className=" inline-flex justify-center h-full items-center bg-white border-black relative px-4 gap-2"
          onClick={toggleAudioIndicator}
        >
          <audio
            ref={backgroundMusicRef}
            className="hidden"
            src="/sounds/background.mp3"
            loop
          />
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`indicator-line mt-2 ${isIndicatorActive ? "active" : ""}`}
              style={{ animationDelay: `${bar * 0.1}s` }}
            />
          ))}
        </button>
        <button
          onClick={() => setIsOpenMenu(true)}
          className="inline-flex justify-center border-l-4 h-full items-center bg-white border-black relative px-4 gap-2"
          title="menu"
        >
          <BurguerIcon className="w-8 h-8" />
        </button>
      </nav>

      <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </>
  );
}
