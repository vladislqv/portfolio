import logo from "../assets/logo.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import React, {RefObject} from "react";

function Header({refs}: {
    refs: {
        homeRef: RefObject<HTMLDivElement>,
        aboutRef: RefObject<HTMLDivElement>,
        resumeRef: RefObject<HTMLDivElement>,
        certificatesRef: RefObject<HTMLDivElement>,
        portfolioRef: RefObject<HTMLDivElement>
    }
}) {
    function handleRef(ref: React.Ref<HTMLDivElement> | null) {
        if(ref && 'current' in ref){
            ref.current?.scrollIntoView({behavior: "smooth"})
        }
    }
    return (
        <>
            <div
                className="flex justify-between px-7 py-1 max-h-[98px] border-b-[1.5px] border-white container mx-auto">
                <img className="" src={logo} alt="" />
                <div className="nav-links flex items-center justify-center gap-[70px] font-main font-light">
                    <a onClick={() => {handleRef(refs.homeRef)}} className="hover:text-[#FF5D73] transition-all">Home</a>
                    <a onClick={() => {handleRef(refs.aboutRef)}} className="hover:text-[#FF5D73] transition-all">About</a>
                    <a onClick={() => {handleRef(refs.resumeRef)}} className="hover:text-[#FF5D73] transition-all">Resume</a>
                    <a onClick={() => {handleRef(refs.certificatesRef)}} className="hover:text-[#FF5D73] transition-all">Cetificates</a>
                    <a onClick={() => {handleRef(refs.portfolioRef)}} className="hover:text-[#FF5D73] transition-all">Portfolio</a>
                </div>
                <div className="socials flex items-center gap-[14px]">
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
        </>
    )
}


export default Header;