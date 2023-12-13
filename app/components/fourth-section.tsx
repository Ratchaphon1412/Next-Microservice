"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const root = useRef(null);
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.set(".image1", { y: -230, opacity: 0.5 });
      gsap.set(".image2", { y: -100, x: 170, opacity: 0.5 });
      gsap.set(".image3", { x: -350, y: -400, opacity: 0.5 });
      gsap.set(".image4", { y: -400, x: 700, opacity: 0.5 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top center",
          end: "+=1000",
          scrub: true,
        },
      });

      tl.to(".image1", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "SlowMo",
      })
        .to(".image2", {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "SlowMo",
        })
        .to(".image3", {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "SlowMo",
        })
        .to(
          ".image4",
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "SlowMo",
          },
          0.7
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-48 bg-black flex flex-col justify-center h-[0px] min-[1440px]:h-full" ref={root}>
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="-mt-20 flex justify-end image1">
          <img
            ref={img1}
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden min-[1440px]:visible invisible"
            src="/assets/images/category/Men-TShirt.png"
          />
        </div>
        <div className="flex justify-start image2">
          <img
            ref={img2}
            className="rounded-lg object-cover overflow-hidden min-[1440px]:visible invisible"
            src="/assets/images/category/Women-TShirt.png"
          />
        </div>
        <div className="-mt-64 flex justify-start image3">
          <img
            ref={img3}
            className="rounded-lg object-cover overflow-hidden min-[1440px]:visible invisible"
            src="/assets/images/category/Women2-TShirt.png"
          />
        </div>
        <div className="flex justify-start image4">
          <img
            ref={img4}
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden min-[1440px]:visible invisible"
            src="/assets/images/category/PixelMan-TShirt.png"
          />
        </div>
      </div>
    </section>
  );
}
