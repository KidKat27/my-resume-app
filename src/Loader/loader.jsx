import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./loader.scss";
import {words} from "./data.jsx"
import {introAnimation, outroAnimation} from "./animation.jsx"

export default function Loader({timeline}) {
    
        //Gsap
        const helloRef = useRef(null);
        const screenRef = useRef(null);
    
        useEffect(() => {
            timeline &&
            timeline.add(introAnimation(helloRef)).add(outroAnimation(screenRef))
        }, [timeline])

    return(
        <>
            <div id="loader-body" className="w-screen h-screen overflow-hidden text-center font-poppins bg-darkbg" ref={screenRef}>
                <div id="cover1" className="block relative bg-darkbg"></div>
                <div id="cover2" className="block absolute bg-darkbg"></div>
                <div id="word-container" ref={helloRef} className="scale-0">
                    {words.map((word, index) => {
                        return (
                            <h1 key={index} className="font-bold text-5xl sm:text-5xl text-gray-200">
                                {word}
                            </h1>
                        );
                    })}
                </div>
            </div>   
        </>
    );
}