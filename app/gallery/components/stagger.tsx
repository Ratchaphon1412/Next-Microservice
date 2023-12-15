"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let images = gsap.utils.toArray(".grid-images > li");
      gsap.set(images, {
        opacity: 0,
      });

      gsap.to(images, {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".grid-images",
          scrub: true,
          start: "top top+=1000",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-8">
      <ul
        id="gallery"
        className="grid grid-cols-2 gap-5 lg:grid-cols-5 grid-images"
      >
        <li>
          <img
            src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 01"
          />
        </li>

        <li>
          <img
            src="https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 07"
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1689217634234-38efb49cb664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 08"
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 09"
          />
        </li>
        <li>
          <img
            src="https://cdn.devdojo.com/images/june2023/mountains-10.jpeg"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 10"
          />
        </li>
        <li>
          <img
            src="https://cdn.devdojo.com/images/june2023/mountains-06.jpeg"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 06"
          />
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 07"
          />
        </li>

        <li>
          <img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 08"
          />
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 09"
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
            alt="photo gallery image 10"
          />
        </li>
      </ul>
    </section>
  );
}
