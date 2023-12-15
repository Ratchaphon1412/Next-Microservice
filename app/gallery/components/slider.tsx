"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useInView } from "react-intersection-observer";

export default function Component() {
  const root = useRef(null);
  const section = useRef<HTMLDivElement>(null);
  const flipdiv = useRef<HTMLDivElement>(null);
  const flipdiv2 = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({triggerOnce: true});

  useEffect(() => {
    const state = Flip.getState(".container-pixel, .text");

    flipdiv.current?.classList.toggle("reorder");
    flipdiv2.current?.classList.toggle("reorder");

    Flip.from(state, {
      absolute: true,
      duration: 2,
      stagger: 0.02,
      ease: "power1.inOut",
    });
  }, [inView]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, Flip);

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
          end: (): any => {
            if (section.current) {
              return "+=" + section.current.offsetWidth;
            }
          },
        },
      });


      // gsap.to('.st--piston', {
      //   x: -30,
      //   ease: "power1.out",
      //   scrollTrigger: {
      //     trigger: ".st--section-c",
      //     containerAnimation: scrollTween,
      //     start: "left left+=100",
      //     end: '.st--piston',
      //     scrub: true,
      //     // pin: true,
      //     // markers: true,
      //     // id: 'piston--odd',
      //   },
      // })

      // gsap.to('.st--section-c', {
      //   width: "130vh",
      //   ease: "power1.out",
      //   scrollTrigger: {
      //     trigger: ".st--section-c",
      //     containerAnimation: scrollTween,
      //     start: "left left+=100",
      //     end: "+=2000",
      //     scrub: true,
      //     // pin: true,
      //     // markers: true,
      //     // id: 'piston--odd',
      //   },
      // })

      gsap.to(".st--piston", {
        // odd goes -100%, even goes 100%
        // width: 700,
        // height: 500,
        scale: 1.5,
        x: 100,
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="overflow-x-hidden font-semibold text-white text-5xl "
    >
      
      <section
        className="bg-black  w-[200%] flex flex-no-wrap st--horizontal min-h-screen"
        ref={section}
      >
        {/* w-[130%] */}
        <div className="bg-black w-screen relative flex pl-4 min-[1440px]:pl-64 st--section-c items-center gap-1 min-[1440px]:gap-4 min-h-screen">
          <div className="overflow-hidden ">
            <img
              src="/assets/images/category/Men-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden ">
            <img
              src="/assets/images/category/Women-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden ">
            <img
              src="/assets/images/category/Women2-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden ">
            <img
              src="/assets/images/category/PixelMan-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden ">
            <img
              src="/assets/images/category/Women2-TShirt.png"
              className="st--piston"
            />
          </div>
        </div>

        <div className="w-screen bg-black  flex items-center justify-center p-16 overflow-hidden gallery-right min-h-screen">
          <div ref={inViewRef} className="flex flex-col gap-4">
            <div
              className="container-pixel font-pixellet text-[20px] min-[1440px]:text-[100px] items-center justify-center"
              ref={flipdiv}
            >
              <p className="text">P</p>
              <p className="text">I</p>
              <p className="text">X</p>
              <p className="text">E</p>
              <p className="text">L</p>

              <p className="text">M</p>
              <p className="text">A</p>
              <p className="text">N</p>
            </div>
            <div className=" justify-center items-center  container-pixel" ref={flipdiv2}>
              <img src="/assets/images/logo/blue.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Yellow.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Green.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Red.svg" className="text w-[50px]" />
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}
