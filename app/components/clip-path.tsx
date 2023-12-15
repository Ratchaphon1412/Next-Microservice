'use client'
import VideoIntro from "@/app/components/videointro";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClipPath({text, videoPath}: {text: string, videoPath: string}) {
    const root = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {

            gsap.set(".videoShow", { scale: 1.7, opacity:0.2 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: '+=900',
                    scrub: true,
                    pin: true,
                }
            })

            tl.to(root.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                
            }).to('.videoShow' ,{
                scale: 1,
                opacity: 1,
            }).to('.fullwidth-image__overlay', {
                opacity:0
            }, 0.5)
         
          
        }, root);
    
        return () => ctx.revert();
      }, []);


    return (
        <section className="fullwidth-image" ref={root}>
            <div className="fullwidth-image__overlay"><h1 className="font-pixelletMedium text-[70px] min-[1440px]:text-[150px]">Pixel Man</h1></div>
            <div className="h-full w-full object-cover absolute inset-0 videoShow">
                <VideoIntro
                videoPath={videoPath}
                speedVideo={2.5}
                />
            </div>
        </section>
    )

}