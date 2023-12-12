"use client";
import Logo from "@/app/components/logo";
import VideoIntro from "@/app/components/videointro";
import SongIntro from "@/app/components/songintro";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const stylelogo = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };
  const speedVideo = 2.5;

  const root = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(".video1", {
        y: 300, // Translate by 300 pixels vertically
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: root.current,
          start: "top top", // Adjust as needed based on when you want the animation to start
          end: "bottom+=300 center",
          scrub: true, // Smoothing effect when scrolling
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-screen overflow-y-hidden overflow-x-hidden"
    >
      <div className="h-full w-full  object-cover video1">
        <VideoIntro
          videoPath="/assets/video/MainLandingVideo-Pixel-Man.mp4"
          speedVideo={speedVideo}
        />
      </div>

      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-auto "
        style={stylelogo}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-8 md:px-12 lg:w-1/2 md:w-2/3 sm:w-2/3 xs:w-2/3">
            <h1 className="md:text-4xl text-3xl font-xs font-pixelletMedium tracking-tight mb-6">
              Pixel Man
            </h1>

            <Logo class="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
