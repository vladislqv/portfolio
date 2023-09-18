import {RefObject} from "react";
import Card from "./Card.tsx";

export interface ICertificates {
    title: string,
    from: string,
    description: string,
    image: string,
    skills: string[]
}
function Certificates({certificatesRef}: { certificatesRef: RefObject<HTMLDivElement> | undefined }) {

    const certificates: ICertificates[] = [
        {
            title: "Ethereum Developer Bootcamp",
            from: "Alchemy University",
            description: "...",
            image: "img",
            skills: ["Become Interview Ready", "Master Solidity", "Build Smart Contracts"]
        }
    ]

    return (
        <div ref={certificatesRef} className="bg-[#000] text-[#fff] font-chakra h-screen">
            <div className="container mx-auto py-20 border-t-[2px] border-white">
                <h1 className="relative text-[64px] font-bold font-title w-fit">Certificates & Courses</h1>
                <div className="grid grid-cols-4 gap-4">



                </div>
                {/*<Card {...certificates[0]} />*/}
            </div>
        </div>
    )
}

export default Certificates