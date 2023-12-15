"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Component({direction}: {direction: any}) {
  const root = useRef(null);
  const gallery = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let cpDirection = 0;

      if (direction > 0 ){
        gsap.set(gallery.current, {
            x: -1 * direction
        })
        cpDirection = (-1 * direction) + direction 
      } else {
        cpDirection = direction
      }

      gsap.to(gallery.current, {
        x: cpDirection,
        ease: "power1.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // pin: true,
          // id: 'piston--odd',
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="p-5 overflow-hidden" ref={root}>
      <div className="flex gap-5 h-[200px] min-[1440px]:h-[500px]" ref={gallery}>
        <img src="https://source.unsplash.com/bYuI23mnmDQ" />
        <img src="https://source.unsplash.com/Nllx4R-2c3o" />
        <img src="https://source.unsplash.com/lp40q07DIe0" />
        <img src="https://source.unsplash.com/wfalq01jJuU" />
        <img src="https://source.unsplash.com/rMHNK_skwwU" />
        <img src="https://source.unsplash.com/WBMjuGpbrCQ" />
        <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
        <img src="https://source.unsplash.com/3u4fzMQZhjc" />
        <img src="https://source.unsplash.com/haOIqIPSwps" />
        <img src="https://source.unsplash.com/3UrYD7NNVxk" />
        <img src="https://source.unsplash.com/fm1JKDItlVM" />
        <img src="https://source.unsplash.com/qPpq1EVs8vw" />
        <img src="https://source.unsplash.com/xRyL63AwZFE" />
        <img src="https://source.unsplash.com/XeNKWTiCPNw" />
        <img src="https://source.unsplash.com/DFt3T5r_4FE" />
        <img src="https://source.unsplash.com/Ebwp2-6BG8E" />
      </div>
    </div>
  );
}
