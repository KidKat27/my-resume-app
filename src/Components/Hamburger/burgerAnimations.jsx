import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const burgerAppear = (hamBtnRef, dummyRef) =>{

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        gsap.from(hamBtnRef.current, {
            scale: 0,
            display: "none"
        })
    
        gsap.to(hamBtnRef.current, {
            scale: 1,
            display: "flex",
            duration: 1,
            ease: "slow(0.5,0.5,false)",
            scrollTrigger: {
                trigger: dummyRef.current,
                toggleActions: "play none reverse none",
                start: "225 20%",
                end: "225 0%",
                scrub: true,
            }
        })
    })
}