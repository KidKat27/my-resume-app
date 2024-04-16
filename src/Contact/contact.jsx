import React, {useEffect, useRef, useState} from "react";

import "./contact.scss";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact () {

    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
        }, []);

        //gsap
        const contactBodyRef = useRef(null);

        useEffect(() => {
            gsap.to(contactBodyRef.current, {
                borderRadius: "0 0 0 0",
                scrollTrigger: {
                    trigger: contactBodyRef.current,
                    start: "top 80%",
                    end: "top 10%",
                    scrub: true,
                }
            })
        })

    return(
        <section id="contact">
            <div id="contactBody" className="h-screen bg-darkbg font-poppins text-gray-200 text-center" ref={contactBodyRef}>
            <h1 className="text-6xl pt-10 pb-20 font-bold">CONTACT.</h1>

            <div>
                <p className="text-2xl text-left pl-28 pb-10">Interested in partnering up or want to hire me? Reach out, let's work together!</p>

                <h1 id="email" className="font-bold">harshachakravarthy27@gmail.com</h1>

                <div id="instaQR" className="flex pb-20 pt-24">
                    <h1 className="text-left text-2xl pt-28 pl-32">Or maybe send a DM:</h1>
                    <a href="https://www.instagram.com/harshachakravarthy?igsh=MWRkdTVpbD12NjY5bg==" target="_blank"><img className="pl-40 ml-4 hover:scale-105 duration-500 " id="instaQR" src="/assets/Instagram.png"/></a>
                </div>

                <div id="footer" className="font-poppins text-gray-200 pt-44 pl-28 ">
                    <h1 className="text-left text-xl">Local time (IST):</h1>
                    <div className="flex justify-between">
                        <p className="text-left text-xl font-semibold">{localTime.toLocaleTimeString()}</p>
                        <h1 className="text-xl text-center pr-20">&copy; Harsha Chakravarthy 2024</h1>
                    </div>
                </div> 

                <div id="footer2" className="hidden font-poppins text-gray-200 pl-28 ">
                    <h1 className="text-xl text-center pr-20">&copy; Harsha Chakravarthy 2024</h1>
                </div>
            </div>
        </div>
        </section>
    );
} 

