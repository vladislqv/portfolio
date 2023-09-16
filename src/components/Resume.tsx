import {RefObject} from "react";


function Resume({resumeRef}: { resumeRef: RefObject<HTMLDivElement> | undefined }) {
    return (
        <div className="bg-[#7C7A7A] text-[#000] font-main" ref={resumeRef}>
            <div className="container mx-auto py-20">
                <h1 className="text-[#000] relative text-[64px] font-bold italic w-fit before:content-[''] before:h-[7px] before:absolute before:bg-[#000] before:w-[100%] before:bottom-[-5px]">Resume</h1>
                <div className="flex justify-around items-center mt-20">
                    <div className="education flex flex-col gap-5">
                        <h2 className="font-bold italic text-[36px] text-center">Education</h2>
                        <div className="education-item flex flex-col justify-center items-center">
                            <h3 className="font-normal styled-list">Technical University Of Moldova</h3>
                            <div className="bg-[#fff] text-[18px] inline px-[20px] py-[5px] rounded-lg mx-auto font-normal">2022-2025</div>
                        </div>
                    </div>
                    <div className="experiencem flex flex-col gap-10">
                        <h2 className="font-bold italic text-[36px">Professional Experience</h2>
                        <div className="flex flex-col gap-3">
                            <div className="styled-list">Freelancing as a Backend Developer (Python + Django)</div>
                            <div className="styled-list">Freelancing as a Python developer (simple scripts like scrappers, working with files)</div>
                            <div className="styled-list">Freelancing as a Frontend Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume