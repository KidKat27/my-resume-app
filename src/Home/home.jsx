import React, { useRef, useEffect } from "react";

import "./home.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "../Components/Navbar/navbar";

import { homeAnimations, scrollDisapper, scrollAppear, slideOut, slideOut2 } from "./homeAnimations";

export default function home(){

    const blurRef = useRef(null)
    const helloRef = useRef(null)
    const nameRef = useRef(null)
    const whatidoRef = useRef(null)
    const resumeRef = useRef(null)
    const navRef = useRef(null)

    const openToWorkRef = useRef(null)
    const openToWork2Ref = useRef(null)
    
    const scrollIndicatorRef = useRef(null)

    useEffect(() => {
        homeAnimations(blurRef, helloRef, nameRef, whatidoRef, navRef)
        
        slideOut(openToWorkRef)
        slideOut2(openToWork2Ref)
        scrollAppear(scrollIndicatorRef)
        scrollDisapper(scrollIndicatorRef)
    }, [])

    return(
        <>
            <div id="home-body" className="w-screen overflow-hidden">
            <div id="forblur" className="" ref={blurRef}>
                <div id="nav-contaier" className="" ref={navRef}><Navbar/></div>
                    <div id="brand-container" className="">
                        <h1 id="hi" className="font-poppins font-bold text-3xl md:text-4xl xl:text-6xl pt-10 flex" ref={helloRef}>HELLO, I'M</h1>

                        <div id="openToWork" className="fixed bg-green-600 top-50% right-0 rounded-l-xl" ref={openToWorkRef}>
                            <p class="text-white text-xl  px-2 py-1 font-poppins">Open to Work</p>
                        </div>

                        <h1 id="name" className="font-poppins font-bold text-4xl md:text-5xl xl:text-6xl pt-1 pb-4" ref={nameRef}>HARSHA CHAKRAVARTHY.</h1>

                        <h4 id="what-i-do" className="font-poppins font-light text-2xl md:text-3xl xl:text-4xl ml-40 pt-4 z-40" ref={whatidoRef}>
                            Frontend Developer & Designer. 
                        </h4>

                        <div id="resume" className="text-regular text-lg w-48 bg-slate-800 ml-40 mt-4 pb-1 pt-1 text-center" ref={resumeRef}>
                            <a href="https://drive.google.com/file/d/1zsLLpGAhS4LchtM7HtiUHtwt-2XF6fgy/view?usp=drive_link" target="_blank" className="font-poppins hover:text-gray-200 duration-150">Download Resume</a>
                        </div>
                    </div>
                </div>

                <div id="openToWork2" className="hidden fixed bg-green-600 h-24 w-20 top-0 right-2 rounded-b-xl" ref={openToWork2Ref}>
                    <p class="text-white text-xl  px-2 py-1 font-poppins text-left">Open <br/> to <br/> Work</p>
                </div>

                <div class="scroll-down-indicator" ref={scrollIndicatorRef}>
                    <div class="shape"></div>
                    <div class="text">Scroll</div>
                </div>
            </div>
        </>
    );
}