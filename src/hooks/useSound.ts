import { useRef } from "react";

type UseSoundReturnType = [
  React.RefObject<HTMLAudioElement | null>,
  (callback?: () => void) => void,
];

export default function useSound(): UseSoundReturnType {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  function play(callback: () => void = () => {}): void {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.volume = 0.5;
      soundRef.current.play();

      if (callback) {
        callback();
      }
    }
  }

  return [soundRef, play];
}
