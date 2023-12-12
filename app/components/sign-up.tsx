"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const root = useRef(null);
  const leftText = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.set(".movetext1", { opacity: 0.5, color: "black" });
      gsap.set(".cursor1", { opacity: 0.5, y: 150, x: 200 });
      gsap.set(".button1", { opacity: 0, y: -150 });

      gsap.to(".movetext1", {
        y: -70, // Translate by 300 pixels vertically
        duration: 0.01,
        opacity: 1,
        color: "white",
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: "bottom center",
          scrub: true, // Smoothing effect when scrolling
        },
      });

      gsap.to(".cursor1", {
        y: 0, // Translate by 300 pixels vertically
        x: 0,
        duration: 0.001,
        opacity: 1,
        color: "white",
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: "center-=200 top",
          scrub: true, // Smoothing effect when scrolling
        },
      });

      gsap.to(".button1", {
        y: 30, // Translate by 300 pixels vertically
        x: 0,
        duration: 0.001,
        opacity: 1,
        color: "white",
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: "center-=200 top",
          scrub: true, // Smoothing effect when scrolling
          //   end: () => {
          //     if (leftText.current) {
          //       const rect = leftText.current.getBoundingClientRect();
          //       return `+=${rect.top + rect.height / 2}`;
          //     }
          //   },
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-full bg-black flex justify-center h-[0px] min-[1440px]:h-screen items-center"
      ref={root}
    >
      <div
        ref={leftText}
        className="flex-1 px-4  min-[1440px]:text-[70px] text-[0px] pt-32 font-pixelletMedium movetext1"
      >
        Pixel Man Where Every Click Creates a
        <p className="text-amber-400">Masterpiece!</p>
      </div>
      <div className="flex-1 flex h-full flex-col justify-center items-center">
        <a href="/auth/login" className="w-1/3 bg-amber-400 rounded py-4 px-4 min-[1440px]:text-[30px] min-[1440px]:visible invisible text-[0px] font-pixelletMedium button1">
          Click Now!
        </a>
        <div className="cursor1">
          <img className="min-[1440px]:w-[100px] min-[1440px]:visible invisible w-[0px] " src="./assets/images/cursor.png" alt="" />
        </div>
      </div>
    </section>
  );
}
