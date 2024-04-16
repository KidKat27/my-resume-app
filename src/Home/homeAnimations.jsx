import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const homeAnimations = (blurRef, helloRef, nameRef, whatidoRef, navRef) => {
    const tl = gsap.timeline()

    tl.to(blurRef.current, {
        filter: "blur(4px)",
        transition: "ease-in-out",
        scrollTrigger:{
            start: "380 45%",
            end: "800 20%",
            scrub: true,
        }
    })
    tl.to(helloRef.current, {
        xPercent: -20,
        yPercent: -40,
        transition: "ease-in-out",
        scrollTrigger:{
            start: "380 51%",
            end: "800 20%",
            scrub: true,
        }
    })
    tl.to(nameRef.current, {
        xPercent: 30,
        yPercent: 20,
        scrollTrigger:{
            start: "380 51%",
            end: "800 20%",
            scrub: true,
        }
    })
    tl.to(whatidoRef.current, {
        xPercent: -30,
        transition: "ease-in-out",
        scrollTrigger:{
            start: "380 51%",
            end: "800 20%",
            scrub: true,
        }
    })
    tl.to(navRef.current, {
        yPercent: -20,
        transition: "ease-in-out",
        scrollTrigger:{
            start: "20 2%",
            end: "200 20%",
            scrub: true,
        }
    })
    return tl;
}

export const slideOut = (openToWorkRef) => {
    gsap.to(openToWorkRef.current, {
        xPercent: 100,
        scrollTrigger: {
            trigger: openToWorkRef.current,
            start: "top 45%",
            end: "top 38%",
            scrub: true,
        }
    })
}

export const scrollAppear = (scrollIndicatorRef) => {
    gsap.to(scrollIndicatorRef.current, {
        opacity: 1,
        delay: 2,
        duration: 2,
    })
}

export const scrollDisapper = (scrollIndicatorRef) => {
    gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
            trigger: scrollIndicatorRef.current,
            start: "top 20%",
        }
    })
}


export const slideOut2 = (openToWork2Ref) => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1024px)", () => {
       gsap.to(openToWork2Ref.current, {
        yPercent: -100,
        scrollTrigger: {
            trigger: openToWork2Ref.current,
            start: "bottom 10%",
            scrub: true,
        }
       })
    })
}