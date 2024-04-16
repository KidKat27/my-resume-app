import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./navbar.scss"

export default function Navbar(){

    const navContainerRef = useRef(null);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        gsap.to(navContainerRef.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: navContainerRef.current,
                start: "200 25%",
                end: "200 15%",
                scrub: true
            }
        })
    })

    return(
        <>
            <div id="navContainer" className="w-screen h-24 " ref={navContainerRef}>
                <nav id="nav" className="p-10 z-10 right-8 absolute flex font-poppins">
                    <ul className="flex justify-end space-x-5 text-gray-900">
                        <li>
                            <a href="/" className="hover:text-gray-500 xl:text-xl">Home.</a>
                        </li>
                        <li>
                            <Link to="#about" smooth className="hover:text-gray-500 xl:text-xl">About me.</Link>
                        </li>
                        <li>
                            <Link to="#contact" smooth className="hover:text-gray-500 xl:text-xl">Contact.</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}