import React, { useEffect, useRef } from "react";

import "./about.scss"
import {bodyAnimation, highlightAnimations, marqueeAnimation , marqueeAnimation2, stickyParagraph, stickySkills, stickyParagraph2, bodyColorChange, bodyColorChange2} from "./aboutAnimations.jsx"

export default function About () {

    const bodyRef = useRef(null);

    const highlight1Ref = useRef(null);
    const highlight2Ref = useRef(null);
    const highlight3Ref = useRef(null);
    const highlight4Ref = useRef(null);

    const paragraphRef = useRef(null);

    const serviceBannerRef = useRef(null);
    const skillsMarqueeRef = useRef(null);

    const webDesignStickyRef = useRef(null);
    const webDevelopmentStickyRef = useRef(null);
    const brandingStickyRef = useRef(null);

    const toolsBannerRef = useRef(null);
    const toolsMarqueeRef = useRef(null);

    const skillsParaRef = useRef(null);

    const whyMeRef = useRef(null)

    useEffect (() =>{
        bodyAnimation(bodyRef)
        highlightAnimations(highlight1Ref, highlight2Ref, highlight3Ref, highlight4Ref)
        stickyParagraph(paragraphRef)
        marqueeAnimation(skillsMarqueeRef)      
        stickySkills(webDesignStickyRef, webDevelopmentStickyRef, brandingStickyRef)
        marqueeAnimation2(toolsMarqueeRef)
        stickyParagraph2(skillsParaRef)
        bodyColorChange(whyMeRef, bodyRef)
        bodyColorChange2(whyMeRef, bodyRef)
    }, [])

    return (
        <section id="about">
            <div id="about-body" className="font-poppins bg-darkbg text-center" ref={bodyRef}>
            <h1 id="aboutH1" className="font-poppins pt-20 text-5xl sm:text-7xl font-bold text-gray-200 opacity-1">ABOUT ME.</h1>
                <div id="container" className="" >
                    <img id="my-img" className="rounded-2xl" src="https://github.com/KidKat27/my-resume-app/blob/main/assets/myImg4.jpg?raw=true" />
                    <p className="font-poppins text-2xl text-gray-200 text-left pl-10 pr-10" ref={paragraphRef}>
                        Hi, welcome!<br/><br/>
                        I’m Harsha, a <p id="highlight-text" className="m-0 p-0 inline" ref={highlight1Ref}>passionate</p> 
                        <> </> web developer & designer based in Bangalore, India.<br/><br/>
                        I thrive on turning ideas into reality through <p id="highlight-text2" className="m-0 p-0 inline" ref={highlight2Ref}>innovative</p> and <p id="highlight-text3" className="m-0 p-0 inline" ref={highlight3Ref}>creative</p> ways with assurance of excellence in every project. My journey is fueled by <p id="highlight-text4" className="m-0 p-0 inline" ref={highlight4Ref}>curiosity</p> and relentless pursuit of knowledge.<br/><br/>
                        When I’m not at my work desk, I like to ride my bike and hit the gym.
                    </p>  
                </div>

                <div id="serviceBanner" className="w-screen h-40 bg-orange-600 text-grey-600 flex flex-wrap text-center justify-center overflow-hidden" ref={serviceBannerRef}>
                    <h1 className="text-7xl font-poppins font-bold text-gray-900 bottom-28 relative" ref={skillsMarqueeRef}>
                        SERVICES.
                        <p className="pl-40 inline text-5xl"></p>
                        SERVICES.
                        <p className="pl-40 inline text-5xl"></p>
                        SERVICES.
                        <p className="pl-40 inline text-5xl"></p>
                        SERVICES.
                        <p className="pl-40 inline text-5xl"></p>
                        SERVICES.
                    </h1>
                </div>

                    <div id="services">
                    <div className="pt-10 top-20 pl-28 font-poppins" ref={webDesignStickyRef}>
                        <h1 className="text-5xl text-gray-200 font-bold text-left">Web Design.</h1>
                        <br></br>
                        <p className="text-xl pl-40 text-gray-200 font-light">Designs that embodies creativity and uniqueness with its captivating blend of modern aesthetics and intuitive functionality. A digital piece of art made to stand out, offering visitors an unforgettable experience. </p>
                    </div>

                    <div className="pl-28 font-poppins" ref={webDevelopmentStickyRef}>
                        <h1 className="text-5xl text-gray-200 font-bold text-left">Web Development.</h1>
                        <br></br>
                        <p className="text-xl pl-40 text-gray-200 font-light">With precision and finesse, I am able to transform abstract concepts into tangible digital experiences. Each line of code showcases my dedication, ensuring every detail is faithfully realized in the final product. </p>
                    </div>

                    <div className="pl-28 font-poppins pb-80" ref={brandingStickyRef}>
                        <h1 className="text-5xl text-gray-200 font-bold text-left">UI/UX.</h1>
                        <br></br>
                        <p className="text-xl pl-40 text-gray-200 font-light">Seamlessly integrating user needs with the application of design principles, through meticulous research and iterative refinement, in order to provide a tailored user experience according to the brand.</p>
                    </div>
                    </div>

                <div id="serviceBanner" className="w-screen h-24 bg-blue-600 text-grey-600 flex flex-wrap text-center justify-center overflow-hidden" ref={toolsBannerRef}>
                    <h1 className="text-7xl font-poppins font-bold text-gray-900 bottom-28 relative" ref={toolsMarqueeRef}>
                        TOOLS.
                        <p className="pl-40 inline text-5xl"></p>
                        TOOLS.
                        <p className="pl-40 inline text-5xl"></p>
                        TOOLS.
                        <p className="pl-40 inline text-5xl"></p>
                        TOOLS.
                        <p className="pl-40 inline text-5xl"></p>
                        TOOLS.
                        <p className="pl-40 inline text-5xl"></p>
                        TOOLS.
                    </h1>
                </div>

                <div id="tools" className="pt-32 flex flex-wrap font-poppins pl-20">
                    <p className="w-1/2 text-gray-200 text-xl" ref={skillsParaRef}> Currently, these are my go to tools that I use to make my projects happen. However, I eagerly embrace new experiences and I am constantly learning and evolving.</p>
                    <div id="toolsList" className="text-5xl text-gray-200 font-bold text-left pl-24">
                        <h1 className="pb-8">HTML.</h1>
                        <h1 className="pb-8">CSS.</h1>
                        <h1 className="pb-8">JavaScript.</h1>
                        <h1 className="pb-8">ReactJS.</h1>
                        <h1 className="pb-8">TailwindCSS.</h1>
                        <h1 className="pb-8">GSAP.</h1>
                        <h1 className="pb-8">SCSS.</h1>
                        <h1 className="pb-8">Figma.</h1>
                        <h1 className="pb-8">GitHub.</h1>
                    </div>
                </div>

                <div id="moreAboutMe" className="pt-96">
                <h1 id="aboutH1" className="font-poppins pt-20 pl-28 text-4xl sm:text-6xl font-bold text-left text-gray-200 opacity-1">MORE ABOUT ME!</h1>

                <p className="font-poppins text-2xl text-gray-200 text-left pt-10 pl-28">Oh yeah, I also produce electronic dance music.</p>
                    <div className="pl-20 pb-40">
                        <audio controls className="mt-10 pr-20 w-full ">
                            <source src="https://github.com/KidKat27/my-resume-app/raw/main/assets/Song1.mp3"/>
                        </audio>
                        <audio controls className="mt-10 pr-20 w-full ">
                            <source src="https://github.com/KidKat27/my-resume-app/raw/main/assets/Song2.mp3"/>
                        </audio>
                    </div>
                </div>

                <div id="whyHireMe" className="pt-96">
                    <h1 id="aboutH1" className="font-poppins pt-20 pl-28 text-4xl sm:text-6xl font-bold text-left text-darkbg opacity-1" ref={whyMeRef}>WHY CHOOSE ME?</h1>

                    <p className="font-poppins text-xl font-light text-darkbg text-left pl-28 pt-16 pb-10">Although currently I have no projects or experience of work under my name, I am very much passionate and with enthusiasm, I am constantly trying to improve my knowledge in the field of frontend development and design. <br/><br/>

                    If given an opportunity, I would surely give 100% of my commitment towards delivering excellent results.</p>

                    <div id="resume" className="text-regular text-lg w-48 bg-slate-800 ml-28 mt-4 pb-1 pt-1 text-center">
                        <a href="https://drive.google.com/file/d/1zsLLpGAhS4LchtM7HtiUHtwt-2XF6fgy/view?usp=drive_link" target="_blank" className="font-poppins hover:text-gray-200 duration-150">Download Resume</a>
                    </div>
                </div>
        </div>
        </section>
    );
}