import logo from "../assets/logo.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import React, {RefObject, useEffect, useState} from "react";
import menu from "../assets/menu.svg"
// import arrowUp from "../assets/arrow-up-circle.svg";
import MobileMenu from "@/components/MobileMenu.tsx";
import {AnimatePresence} from "framer-motion";

function Header({refs}: {
    refs: {
        homeRef: RefObject<HTMLDivElement>,
        aboutRef: RefObject<HTMLDivElement>,
        resumeRef: RefObject<HTMLDivElement>,
        certificatesRef: RefObject<HTMLDivElement>,
        portfolioRef: RefObject<HTMLDivElement>
        contactMeRef: RefObject<HTMLDivElement>
    }
}) {
    function handleRef(ref: React.Ref<HTMLDivElement> | null) {
        if (ref && 'current' in ref) {
            ref.current?.scrollIntoView({behavior: "smooth"})
        }
    }

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
                if (showMenu) {
                    document.body.classList.add('no-scroll');
                } else {
                    document.body.classList.remove('no-scroll')
                }
    }, [showMenu]);

    return (
        <>
            <div
                className="flex justify-between items-center px-7 py-1 max-h-[98px] border-b-[1.5px] border-white container mx-auto">
                <img className="h-20 max-xl:h-16 max-lg:h-14" src={logo} alt="logo"/>
                <div className="nav-links flex items-center justify-center gap-[70px] font-chakra font-normal max-[1280px]:hidden">
                    {/*<div onClick={() => {*/}
                    {/*    handleRef(refs.homeRef)*/}
                    {/*}} className="hover:text-[#FF5D73] transition-all cursor-pointer">Home*/}
                    {/*</div>*/}
                    <div onClick={() => {
                        handleRef(refs.aboutRef)
                    }} className="hover:text-[#FF5D73] transition-all cursor-pointer">About
                    </div>
                    <div onClick={() => {
                        handleRef(refs.resumeRef)
                    }} className="hover:text-[#FF5D73] transition-all cursor-pointer">Resume
                    </div>
                    <div onClick={() => {
                        handleRef(refs.certificatesRef)
                    }} className="hover:text-[#FF5D73] transition-all cursor-pointer">Certificates
                    </div>
                    <div onClick={() => {
                        handleRef(refs.portfolioRef)
                    }} className="hover:text-[#FF5D73] transition-all cursor-pointer">Portfolio
                    </div>
                    <div onClick={() => {
                        handleRef(refs.contactMeRef)
                    }} className="hover:text-[#FF5D73] transition-all cursor-pointer">Contact Me
                    </div>
                </div>
                <div className="socials flex items-center gap-[14px] max-[1280px]:hidden">
                    <a href="https://github.com/ycho-eth" target="blank">
                        <img src={github} alt="github"/>
                    </a>
                    <a href="https://twitter.com/ychoeth" target="blank">
                        <img src={twitter} alt="twitter"/>
                    </a>
                    <a href="https://linkedin.com/in/vladislav-zavtur-b4a794283" target="blank">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </div>
                <img className="h-10 max-lg:h-9 max-md:h-8 hidden max-[1280px]:block cursor-pointer" onClick={() => setShowMenu(true)} src={menu} alt="MENU"/>
            </div>
            <AnimatePresence>
                {showMenu && (
                    <MobileMenu key="menu" setShowMenu={setShowMenu} refs={refs}/>
                )}
            </AnimatePresence>

            {/*<img className="fixed right-5 bottom-5 cursor-pointer" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth" })} src={arrowUp} alt=""/>*/}
        </>
    )
}


export default Header;