import React, {useEffect, useRef, useState} from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./burger.scss"

import { burgerAppear } from "./burgerAnimations";

export default function Burger(){
    //Gsap
    const dummyRef = useRef(null)
    const hamBtnRef = useRef(null);
    const hambtnspan1Ref = useRef(null);
    const hambtnspan2Ref = useRef(null);

    useEffect (() => {
        burgerAppear(hamBtnRef, dummyRef)
    }, [])

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>        
            <button id="menu-btn" className="mt-10 ml-10 fixed" onClick={() =>{setMenuOpen(!menuOpen)}} ref={hamBtnRef}>
                <span className={`${menuOpen ? "open1": ""}`} ref={hambtnspan1Ref}></span>
                <span className={`${menuOpen ? "open2": ""}`} ref={hambtnspan2Ref}></span>
            </button> 
            <div id="refDiv" className="" ref={dummyRef}></div>

            <nav id="navbar" className={`fixed ${menuOpen ? "open": ""}`}>
                <ul className="">
                    <li>
                        <a href="/" className="">Home.</a>
                    </li> 
                    <li>
                        <Link to="#about" smooth className="" onClick={() =>{setMenuOpen(!menuOpen)}} >About me.</Link>
                    </li>
                    <li>
                        <Link to="#contact" smooth className="" onClick={() =>{setMenuOpen(!menuOpen)}}>Contact.</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}