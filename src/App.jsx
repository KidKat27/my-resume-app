import React, { useLayoutEffect , useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"

import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,MotionPathPlugin);

import "./App.scss"

import Loader from "./Loader/loader.jsx"
import Home from "./Home/home.jsx"
import About from "./About/about.jsx";
import Burger from "./Components/Hamburger/burger.jsx";
import Contact from "./Contact/contact.jsx";
import Popup from "./Components/Popup/popup.jsx";

function App () {
    // Lenis basic setup
     const lenis = new Lenis()

     lenis.on('scroll', (e) => {
     
     })

     function raf(time) {
     lenis.raf(time)
     requestAnimationFrame(raf)
     }

     requestAnimationFrame(raf)

    //GSAP scroll trigger/ lenis setup

   
    //gsap

    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState(null);


    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setLoaderFinished(true),
            });

            setTimeline(tl);
        })
        return () => context.revert();

    }, [])

    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setPopupOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []); 

    const closePopup = () => {
        setPopupOpen(false);
    };

    return(
        <>
            {loaderFinished ? 

                <Router>
                    <Popup isOpen={isPopupOpen} onClose={closePopup}/>
                    <Burger/>
                    <Home/>
                    <About/>
                    <Contact/>
                </Router> 
                
            : <Loader timeline={timeline}/>}
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))