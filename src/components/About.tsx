import photo from "../assets/photo.png"

function About({aboutRef}: {aboutRef: any | undefined}) {
    return (
        <div ref={aboutRef} className="bg-[#494949]">
            <div className="container mx-auto py-10">
                <h1 className="relative text-[64px] font-bold italic w-fit before:content-[''] before:h-[7px] before:absolute before:bg-[#fff] before:w-[100%] before:bottom-[-5px]">About
                    Me</h1>
                <div className="flex mt-20 gap-20 items-center">
                    <div className="flex flex-col gap-10 flex-[0_0_20%]">
                        <img src={photo} alt=""/>
                        <div className="text-center">
                            <h1 className="text-[#FF5D73] font-bold italic font-main text-[36px]">Vladislav Zavtur</h1>
                            <h3 className="font-main font-bold italic text-[20px]">Blockchain Developer</h3>
                        </div>
                    </div>
                    <div className="">
                        <p className="font-main font-light text-[24px]">
                            I'm Vladislav Zavtur!
                            A dedicated Blockchain Developer with a profound grasp on the intricate mechanics of the
                            Ethereum platform and the Ethereum Virtual Machine (EVM).
                            <br/><br/>
                            With years of hands-on experience in the ever-evolving blockchain landscape, I specialize in
                            leveraging tools like Hardhat, Truffle to deploy and manage smart contracts, ensuring they
                            are efficient, secure, and integrated seamlessly with web interfaces.
                            <br/><br/>
                            Beyond the world of blockchain, my technical expertise extends into mainstream programming
                            and web development. I'm proficient in Javascript, Typescript, React, Python, and NodeJs,
                            and I thrive in environments that challenge me to bridge the gap between blockchain tech and
                            traditional software paradigms.
                            <br/><br/>
                            In every project I embark on, my goal remains consistent: to create innovative solutions
                            that are not only technically sound but also intuitive and user-friendly. Whether it's a
                            decentralized application, a new tokenomics model, or a bridge between blockchain and
                            conventional systems, I'm your developer. Let's make the digital future more decentralized,
                            together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;