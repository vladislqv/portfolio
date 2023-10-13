import photo from "../assets/photo.png"
import {RefObject, useEffect} from "react";

import { useAnimate, useInView } from "framer-motion"


function About({aboutRef}: {aboutRef: RefObject<HTMLDivElement> | undefined}) {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {once: true});

    useEffect( () => {
        if (isInView) {
            animate("h1", { y: [100, 0] }, { type: "spring" })
            animate("h3", { y: [100, 0] }, { type: "spring" })
            animate("p", { x: [-100, 0] }, { type: "spring" })
            animate("img", { x: [100, 0] }, { type: "spring" })

        }
    }, [isInView])


    return (
        <div ref={aboutRef} className="">
            <div className="container mx-auto pt-10 pb-20 border-t-[2px] border-white">
                <h1 className="font-title relative text-6xl max-xl:text-4xl font-bold w-fit">About
                    Me</h1>
                <div ref={scope} className="flex mt-20 gap-20 max-lg:gap-10 items-center max-[1024px]:flex-col">
                    <div className="flex flex-col gap-10 flex-[0_0_20%]">
                        <img className="max-lg:max-h-[50%] profile-photo p-1" src={photo} alt=""/>
                        <div className="text-center">
                            <h1 className="text-[#FF5D73] font-bold italic font-title text-4xl max-lg:text-3xl max-md:text-2xl">Vladislav Zavtur</h1>
                            <h3 className="font-chakra font-medium text-lg max-lg:text-base max-md:text-sm">Blockchain Developer</h3>
                        </div>
                    </div>
                    <div className="">
                        <p className="font-p font-light text-base max-md:text-sm">
                            I'm Vladislav Zavtur!
                            A dedicated Blockchain Developer with a profound grasp on the intricate mechanics of the
                            Ethereum platform and the Ethereum Virtual Machine (EVM).
                            <br/><br/>
                            I have gained practical experience in the dynamic field of blockchain, mastering the use of tools like Hardhat and Truffle to deploy and manage smart contracts. I focus on ensuring these contracts are not only efficient and secure but also smoothly integrated with web interfaces.
                            <br/><br/>
                            Beyond the world of blockchain, my technical expertise extends into mainstream programming
                            and web development. I'm proficient in Javascript, Typescript, React, Python, and NodeJs,
                            and I thrive in environments that challenge me to bridge the gap between blockchain tech and
                            traditional software paradigms.
                            {/*<br/><br/>*/}
                            {/*In every project I embark on, my goal remains consistent: to create innovative solutions*/}
                            {/*that are not only technically sound but also intuitive and user-friendly. Whether it's a*/}
                            {/*decentralized application, a new tokenomics model, or a bridge between blockchain and*/}
                            {/*conventional systems, I'm your developer. Let's make the digital future more decentralized,*/}
                            {/*together!*/}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;