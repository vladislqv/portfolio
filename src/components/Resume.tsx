import {RefObject} from "react";

function Resume({resumeRef}: { resumeRef: RefObject<HTMLDivElement> | undefined }) {
    return (
        <div className="bg-[#000] text-[#fff] font-chakra" ref={resumeRef}>
            <div className="container mx-auto py-20 border-t-[2px] border-white">
                <h1 className="relative text-[64px] font-bold font-title w-fit">Resume</h1>
                <div className="flex justify-around items-center mt-20">
                    <div className="education flex flex-1 flex-col gap-5 border-l-[2px] pl-3">
                        <h2 className="font-bold text-[36px]">Education</h2>
                        <div className="flex flex-col">
                            <div className="text-[#ff5d73] text-[18px] rounded-lg font-bold year">( 2022-Present )</div>
                            <div className="font-bold graduation">Licensed Engineer</div>
                            <h3 className="font-normal education-item">Technical University Of Moldova</h3>
                            <div className="department">Department of Computer Science and Systems Engineering</div>
                        </div>

                    </div>
                    <div className="experience flex flex-1 flex-col gap-5 border-l-[2px] pl-3">
                        <h2 className="font-bold text-[36px]">Professional Experience</h2>
                        <div className="flex flex-col justify-center">
                            <div className="experience-item">Freelancing as a Backend Developer (Python + Django)</div>
                            <div className="experience-item">Freelancing as a Python developer (simple scripts like scrappers, working with files)</div>
                            <div className="experience-item">Freelancing as a Frontend Developer (React)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume