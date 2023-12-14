"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const root = useRef(null);
  const img1 = useRef(null);

  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const imgs = Array.from(document.querySelectorAll('.hero__images img'));


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
          
        //   pin: true,
        },
      });

      //   tl.to('.hero__images img', {
      //     opacity:1,
      //     y:0,
      //     ease: 'power3.out',
      //     duration: 2,
      //     stagger: 0.04,
      //   })

    //   let imgs = gsap.utils.toArray(".hero__images > img");


      let speed = -33
      let opacity = 0.25
      imgs.forEach((image) => {

        

        tl.to(image, {
            ease: "power1.out",
            yPercent: speed,
            opacity: opacity
        },0)
        
        opacity += 0.4
        speed-=40
        
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero overflow-hidden " ref={root}>
      {/* <h1 className="hero__title">
        <div>
          <span>P</span>
          <span>i</span>
          <span>x</span>
          <span>e</span>
          <span>l</span>
        </div>
        <div>
          <span>M</span>
          <span>a</span>
          <span>n</span>
        </div>
      </h1> */}
      <div className="hero__images items-center flex justify-center px-8 py-12">
        <img src="/assets/images/category/PixelMan-TShirt.png"/>
        <img src="/assets/images/category/PixelMan-TShirt.png"/>
        <img src="/assets/images/category/PixelMan-TShirt.png" />
        {/* <img src="/assets/images/category/PixelMan-TShirt.png" />
        <img src="/assets/images/category/PixelMan-TShirt.png" />
        <img src="/assets/images/category/PixelMan-TShirt.png" />
        <img src="/assets/images/category/PixelMan-TShirt.png" /> */}
      </div>
    </section>
  );
}
