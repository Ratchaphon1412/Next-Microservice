"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const root = useRef(null);
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".image1", { y: -300, opacity: 0.5 });
      gsap.set(".image2", { y: -100, x: 100, opacity: 0.5 });
      gsap.set(".image3", { x: -250, opacity: 0.5 });
      gsap.set(".image4", { y: 100, opacity: 0.5 });

      gsap.to(".image1", {
        y: 0, // Translate by 300 pixels vertically
        duration: 0.001,
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: ():any => {
            if (img2.current) {
                return img2.current.getBoundingClientRect().top;
            }
          },
          scrub: true, // Smoothing effect when scrolling
          
        },
      });

      gsap.to(".image2", {
        y: 0,
        x: 0,
        duration: 0.001,
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: ():any => {
            if (img3.current) {
                img3.current.getBoundingClientRect().top
            }
          },
          scrub: true, // Smoothing effect when scrolling
         
        },
      });

      gsap.to(".image3", {
        x: 0,
        duration: 0.001,
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top center", // Adjust as needed based on when you want the animation to start
          end: "bottom center",
          scrub: true, // Smoothing effect when scrolling
         
        },
      });

      gsap.to(".image4", {
        y: 0,
        duration: 0.001,
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: ():any => {
            if (img2.current) {
                img2.current.getBoundingClientRect().top
            }
          }, // Adjust as needed based on when you want the animation to start
          end: "bottom center",
          scrub: true, // Smoothing effect when scrolling
        //   markers: true, // For debugging purposes - shows trigger area
        },
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-48 bg-black flex flex-col justify-center" ref={root}>
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="-mt-20 flex justify-end image1">
          <img
            ref={img1}
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
        <div className="flex justify-start image2">
          <img
            ref={img2}
            className="rounded-lg object-cover overflow-hidden"
            src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          />
        </div>
        <div className="-mt-64 flex justify-start image3">
          <img
            ref={img3}
            className="rounded-lg object-cover overflow-hidden"
            src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        </div>
        <div className="flex justify-start image4">
          <img
            ref={img4}
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
          />
        </div>
      </div>
    </section>
  );
}
