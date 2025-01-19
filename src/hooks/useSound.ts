import { useRef } from "react";

// Definición del tipo de salida del hook
type UseSoundReturnType = [React.RefObject<HTMLAudioElement>, (callback?: () => void) => void];


export default function useSound(): UseSoundReturnType {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  function play(callback: () => void = ()=> {}): void {
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
