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
            start: 'top center',
            end: '+=1000',
            scrub: true,
            
        }
    })

    tl.to('.image1', {
      y:0,
      opacity: 1,
      duration: 1,
      ease: 'SlowMo'
      
    }).to('.image2', {
      y:0,
      x:0,
      opacity: 1,
      duration: 1,
      ease: 'SlowMo'
      
    }).to('.image3', {
      x:0,
      y:0,
      opacity: 1,
      duration: 1,
      ease: 'SlowMo'
    }).to('.image4', {
      y:0,
      x:0,
      opacity: 1,
      duration: 1,
      ease: 'SlowMo'
      
    },0.7)


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
            src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
        <div className="flex justify-start image2">
          <img
            ref={img2}
            className="rounded-lg object-cover overflow-hidden min-[1440px]:visible invisible"
            src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          />
        </div>
        <div className="-mt-64 flex justify-start image3">
          <img
            ref={img3}
            className="rounded-lg object-cover overflow-hidden min-[1440px]:visible invisible"
            src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        </div>
        <div className="flex justify-start image4">
          <img
            ref={img4}
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden min-[1440px]:visible invisible"
            src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
          />
        </div>
      </div>
    </section>
  );
}
