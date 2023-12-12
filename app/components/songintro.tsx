'use client'
import { Play } from "next/font/google";
import { useRef } from "react";

export default function SongIntro() {

    // const audioRef = useRef<HTMLAudioElement>(null);

    // function playAudio() {
    //     audioRef.current.play();
    
    // }

    // function pause() {
    //     audioRef.current.pause();
    // }

    // function volUp() {
    //     if (audioRef.current.volume < 1) {
    //         audioRef.current.volume += 0.1;
    //     }
    // }

    // function volDown() {
    //     if (audioRef.current.volume > 0) {
    //         audioRef.current.volume -= 0.1;
    //     }
    // }

  // return (
  //   <figure className="w-full h-full flex justify-center">
  //     <audio ref={audioRef } autoPlay  loop src='/assets/audio/iluvu.mp3'>
  //     </audio>
  //     <div className="mt-4">
  //       <button onClick={playAudio} className="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Play</button>
  //       <button onClick={pause} className="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Pause</button>
  //       <button onClick={volUp} className="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Vol +</button>
  //       <button onClick={volDown} className="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Vol -</button>
  //     </div>
  //   </figure>
  // );
}
