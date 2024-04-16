import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const bodyAnimation = (bodyRef) => {
    const tl = gsap.timeline();

    tl.to(bodyRef.current, {
        borderRadius: "0 0 0 0",
        scrollTrigger: {
            trigger: bodyRef.current,
            start: "top 90%",
            end: "top 0%",
            scrub: true
        }   
    })

    return tl;
}

export const highlightAnimations = (highlight1Ref, highlight2Ref, highlight3Ref, highlight4Ref) => {
    gsap.to(highlight1Ref.current, {
        backgroundSize: "100% 100%",
        duration: 1.5,
        scrollTrigger: {
            trigger: highlight1Ref.current,
            start: "top 55%",
            end: "top 30%",
        }
    })
    gsap.to(highlight2Ref.current, {
        backgroundSize: "100% 100%",
        duration: 2,
        delay: 1,
        scrollTrigger: {
            trigger: highlight1Ref.current,
            start: "0% 55%",
            end: "0% 30%",
        }
    })
    gsap.to(highlight3Ref.current, {
        backgroundSize: "100% 100%",
        duration: 1.5,
        delay: 2.5,
        scrollTrigger: {
            trigger: highlight1Ref.current,
            start: "0% 55%",
            end: "0% 30%",
        }
    })
    gsap.to(highlight4Ref.current, {
        backgroundSize: "100% 100%",
        duration: 1.5,
        delay: 4,
        scrollTrigger: {
            trigger: highlight1Ref.current,
            start: "0% 55%",
            end: "0% 30%",
        }
    })
}

export const stickyParagraph = (paragraphRef) => {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        gsap.to(paragraphRef.current, {
        
            scrollTrigger: {
                trigger: paragraphRef.current,
                pin: true,
                start: "bottom 92%",
                end: "bottom 56%",
                scrub: true,
            }
        })
    })
}

export const marqueeAnimation = (skillsMarqueeRef) => {

    gsap.to(skillsMarqueeRef.current, {
        xPercent: -21.385, //-21.875 for skills
        duration: 5,
        repeat: -1,
        ease: "linear"
    })
}



export const stickySkills = (webDesignStickyRef, webDevelopmentStickyRef, brandingStickyRef) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        gsap.to(webDesignStickyRef.current, {
            scrollTrigger: {
                trigger: webDesignStickyRef.current,
                pin: true,
                start: "bottom 15%",
                end: "400 10%",
                //set the end of pin after the complete build
            }
        })

        gsap.to(webDevelopmentStickyRef.current, {
            scrollTrigger: {
                trigger: webDevelopmentStickyRef.current,
                pin: true,
                start: "top 35%",
                end: "0 15%",
                //set the end of pin after the complete build
            }
        })

        gsap.to(brandingStickyRef.current, {
            scrollTrigger: {
                trigger: brandingStickyRef.current,
                pin: true,
                start: "top 66%",
                end: "0 56%",
                //set the end of pin after the complete build
            }
        })
    })
}



export const marqueeAnimation2 = (toolsMarqueeRef) => {

    gsap.to(toolsMarqueeRef.current, {
        xPercent: 17.75,
        duration: 5,
        repeat: -1,
        ease: "linear"
    })
}


export const stickyParagraph2 = (skillsParaRef) => {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        gsap.to(skillsParaRef.current, {
        
            scrollTrigger: {
                trigger: skillsParaRef.current,
                pin: true,
                start: "top 14%",
                end: "bottom 30%",
                scrub: true,
            }
        })
    })
}

 
export const bodyColorChange = (whyMeRef, bodyRef) => {
     const mm = gsap.matchMedia();

     mm.add("(min-width: 1024px)", () => {
        gsap.to(bodyRef.current, {
            backgroundColor: "#e8e8e3",
            duration: 1,
            scrollTrigger: {
                trigger: whyMeRef.current,
                start: "top 100%",
                end: "top 80%",
                scrub: true,
            }
        })
     })
}

export const bodyColorChange2 = (whyMeRef, bodyRef) => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1024px)", () => {
       gsap.to(bodyRef.current, {
           backgroundColor: "#e8e8e3",
           duration: 1,
           scrollTrigger: {
               trigger: whyMeRef.current,
               start: "top 80%",
               end: "top 60%",
               scrub: true,
           }
       })
    })
}