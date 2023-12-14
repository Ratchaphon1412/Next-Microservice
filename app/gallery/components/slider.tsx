"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const root = useRef(null);
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".st--horizontal > div");
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".st--horizontal",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural
          end: ():any => {
            if (section.current){
             return "+=" + section.current.offsetWidth
          }},
        },
      });

      let moves = gsap.utils.toArray(".st--section-c > div");
      
      gsap.to(moves, {
        x: -30,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".st--section-c",
          containerAnimation: scrollTween,
          start: "left left+=100",
          end: "+=2000",
          scrub: true,
          // pin: true,
          // markers: true,
          // id: 'piston--odd',
        },
      })

      gsap.to('.st--section-c', {
        width: "110vh",
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".st--section-c",
          containerAnimation: scrollTween,
          start: "left left+=100",
          end: "+=2000",
          scrub: true,
          // pin: true,
          // markers: true,
          // id: 'piston--odd',
        },
      })
      gsap.to(".st--piston", {
        // odd goes -100%, even goes 100%
        // width: 450,
        x: 150,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".st--section-c",
          containerAnimation: scrollTween,
          start: "left left+=100",
          end: "+=2000",
          scrub: true,
          // pin: true,
          // markers: true,
          // id: 'piston--odd',
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="overflow-x-hidden font-semibold text-white text-5xl"
    >
      

      <section
        className="bg-black min-h-screen w-[200%] flex flex-no-wrap st--horizontal"
        ref={section}
      >
        <div className="bg-black w-[130%] min-h-screen relative flex pl-64 st--section-c items-center gap-4">
          
        <div className="overflow-x-hidden"><img src="/assets/images/category/Men-TShirt.png" className="st--piston" /></div>
        <div className="overflow-x-hidden"><img src="/assets/images/category/Women-TShirt.png" className="st--piston" /></div>
        <div className="overflow-x-hidden"><img src="/assets/images/category/Women2-TShirt.png" className="st--piston" /></div>
        <div className="overflow-x-hidden"><img src="/assets/images/category/PixelMan-TShirt.png" className="st--piston" /></div>
        <div className="overflow-x-hidden"><img src="/assets/images/category/Women2-TShirt.png" className="st--piston"/></div>
          
        </div>

        <div className="w-screen bg-white min-h-screen flex items-center justify-center">
          2
        </div>

       
      </section>

      <section className="bg-pink-600 min-h-screen flex items-center justify-center">
        D
      </section>
      <section className="bg-green-600 min-h-screen flex items-center justify-center">
        E
      </section>
    </div>
  );
}
