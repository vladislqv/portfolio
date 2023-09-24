import React, {Dispatch, RefObject, SetStateAction, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion"
import x from "../assets/x.svg"
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";

function MobileMenu({setShowMenu, refs}: {
    setShowMenu: Dispatch<SetStateAction<boolean>>,
    refs: {
        homeRef: RefObject<HTMLDivElement>,
        aboutRef: RefObject<HTMLDivElement>,
        resumeRef: RefObject<HTMLDivElement>,
        certificatesRef: RefObject<HTMLDivElement>,
        portfolioRef: RefObject<HTMLDivElement>
    }
}) {

    function handleRef(ref: React.Ref<HTMLDivElement> | null) {
        if (ref && 'current' in ref) {
            ref.current.scrollIntoView({behavior: "smooth"})
        }
        setShowMenu(false);
    }

    const menuRef = useRef<HTMLDivElement>(null);

    function handleOverlayClick(e: any) {
        // @ts-ignore
        if (e.target !== menuRef.current && !menuRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    }


    return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        onClick={(e) => handleOverlayClick(e)}
                        className="top-0 left-0 h-[100vh] w-screen fixed z-[100000] backdrop-blur-xl flex flex-col items-center justify-center text-center">
                <img className="absolute top-7 right-7 w-10 h-10 cursor-pointer" src={x} alt=""/>
                <div ref={menuRef} className="flex flex-col gap-3 text-[32px] font-chakra font-bold">
                    <h1 className="text-center text-[52px] font-main font-bold mb-5 text-[#FF5D73]">Menu</h1>
                    <div className="hover:text-[#FF5D73] transition-all cursor-pointer" onClick={() => {
                        handleRef(refs.homeRef)
                    }}>Home
                    </div>
                    <div className="hover:text-[#FF5D73] transition-all cursor-pointer" onClick={() => {
                        handleRef(refs.aboutRef)
                    }}>About
                    </div>
                    <div className="hover:text-[#FF5D73] transition-all cursor-pointer" onClick={() => {
                        handleRef(refs.resumeRef)
                    }}>Resume
                    </div>
                    <div className="hover:text-[#FF5D73] transition-all cursor-pointer" onClick={() => {
                        handleRef(refs.certificatesRef)
                    }}>Certificates
                    </div>
                    <div className="hover:text-[#FF5D73] transition-all cursor-pointer" onClick={() => {
                        handleRef(refs.portfolioRef)
                    }}>Portfolio
                    </div>
                    <div className="socials flex items-center gap-[14px] justify-center mt-10">
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
                </div>
            </motion.div>
    )
}

export default MobileMenu