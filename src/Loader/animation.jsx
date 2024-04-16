import { gsap } from "gsap"

export const introAnimation = (helloRef) => {

    const tl = gsap.timeline()


    tl.to(helloRef.current, {
        scale: 1,
        duration: 1
    })
    tl.to(helloRef.current, {
        scale: 1,
        yPercent: -90,
        duration: 4,
        ease: "power2.inout",
        delay: 0.5
    })

    return tl;
}

export const outroAnimation = (screenRef) => {

    const tl = gsap.timeline()


    tl.to(screenRef.current, {
        yPercent: -100,
        duration: 1,
        borderRadius: "0 0 25 25",
    })

    return tl;
}


