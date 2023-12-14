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

  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    const state = Flip.getState(".container-pixel, .text");

    flipdiv.current?.classList.toggle("reorder");

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

      let images = gsap.utils.toArray(".grid-images > li");
      gsap.set(images, {
        opacity: 0
      })

      gsap.to(images, {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.grid-images',
          scrub: true,
          start: "top top+=1000",
          
        }
      })

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
      className="overflow-x-hidden font-semibold text-white text-5xl"
    >
      <section
        className="bg-black min-h-screen w-[200%] flex flex-no-wrap st--horizontal"
        ref={section}
      >
        {/* w-[130%] */}
        <div className="bg-black w-screen min-h-screen relative flex pl-64 st--section-c items-center gap-4 ">
          <div className="overflow-hidden">
            <img
              src="/assets/images/category/Men-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/images/category/Women-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/images/category/Women2-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/images/category/PixelMan-TShirt.png"
              className="st--piston"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/images/category/Women2-TShirt.png"
              className="st--piston"
            />
          </div>
        </div>

        <div className="w-screen bg-black h-screen flex items-center justify-center p-16 overflow-hidden gallery-right">
          <div ref={inViewRef} className="flex flex-col gap-4">
            <div
              className="container-pixel font-pixellet  items-center justify-center"
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
            <div className=" justify-center items-center  container-pixel">
              <img src="/assets/images/logo/blue.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Yellow.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Green.svg" className="text w-[50px]" />
              <img src="/assets/images/logo/Red.svg" className="text w-[50px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black min-h-screen flex items-center justify-center p-8">
      <ul  id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5 grid-images">
        <li><img src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 01" /></li>

        <li><img src="https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 07" /></li>
        <li><img src="https://images.unsplash.com/photo-1689217634234-38efb49cb664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 08" /></li>
        <li><img src="https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 09" /></li>
        <li><img src="https://cdn.devdojo.com/images/june2023/mountains-10.jpeg" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 10" /></li>
        <li><img src="https://cdn.devdojo.com/images/june2023/mountains-06.jpeg" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 06" /></li>
        <li><img src="https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 07" /></li>
        
        <li><img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 08" /></li>
        <li><img src="https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 09" /></li>
        <li><img src="https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="photo gallery image 10" /></li>
      </ul>
      </section>

    </div>
  );
}
