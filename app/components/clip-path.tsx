'use client'
import VideoIntro from "@/app/components/videointro";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClipPath() {
    const root = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {

            gsap.set(".videoShow", { scale: 1.3, opacity:0.2 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: '+=850',
                    scrub: true,
                    pin: true,
                }
            })

            tl.to(root.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                
            }).to('.videoShow' ,{
                scale: 1,
                opacity: 1,
            }, 0.5)
         
          
        }, root);
    
        return () => ctx.revert();
      }, []);


    return (
        <section className="fullwidth-image" ref={root}>
            <div className="fullwidth-image__overlay"></div>
            <div className="h-full w-full object-cover absolute inset-0 videoShow">
                <VideoIntro
                videoPath="/assets/video/presentration-pixel-man.mp4"
                speedVideo={2.5}
                />
            </div>
        </section>
    )

}