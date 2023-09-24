import {RefObject} from "react";
import Card from "./Card.tsx";
import alchemy from "../assets/alchemy.png"
import learnweb3 from "../assets/learnweb3.png"
import ethers from "../assets/ethers.png"
import speedrun from "../assets/speedrun.png"
import ethernaut from "../assets/ethernaut.png"
import masteringethereum from "../assets/mastering-ethereum.png"
import fireship from "../assets/fireship.png"
import git from "../assets/git.png"
import next from "../assets/next.png"


export interface ICertificates {
    title: string,
    from: string,
    image: string,
    skills: string[]
}

function Certificates({certificatesRef}: { certificatesRef: RefObject<HTMLDivElement> | undefined }) {

    const certificates: ICertificates[] = [
        {
            title: "Ethereum Developer Bootcamp",
            from: "Alchemy University",
            image: alchemy,
            skills: ["Become Interview Ready", "Master Solidity", "Build Smart Contracts", "Decentralized Exchanges", "IPFS"]
        },
        {
            title: "Ethereum Developer Degree",
            from: "LearnWeb3",
            image: learnweb3,
            skills: ["Solidity", "Hardhat", "Ethereum", "EVM", "ERC-20 Tokens", "NFTs", "IPFS"]
        },
        {
            title: "Ethers.js Library",
            from: "ChainShot",
            image: ethers,
            skills: ["Ethers.js", "JSON-RPC Nodes"]
        },
        {
            title: "SpeedrunEthereum",
            from: "BuidlGuidl",
            image: speedrun,
            skills: ["Scaffold-ETH", "DEX", "Multisig Wallets", "State Channels"]
        },
        {
            title: "Ethernaut",
            from: "OpenZeppelin",
            image: ethernaut,
            skills: ["Smart Contract Security", "Gas Optimizations", "Proxy Patterns", "Randomness on Blockchain", "Storage Layout & Memory"]
        },
        {
            title: "Mastering Ethereum Book",
            from: "Andreas M. Antonopoulos, Gavin Wood",
            image: masteringethereum,
            skills: ["Ethereum", "EVM", "Solidity", "Vyper"]
        },
        {
            title: "React - The full course",
            from: "Jeff Delaney (Fireship)",
            image: fireship,
            skills: ["React", "Framer Motion", "React Query"]
        },
        {
            title: "Git & GitHub Full Course",
            from: "Jeff Delaney (Fireship)",
            image: git,
            skills: ["Git", "GitHub"]
        },
        {
            title: "Next.js Full Course",
            from: "Jeff Delaney (Fireship)",
            image: next,
            skills: ["Nextjs", "React", "Postgres"]
        },

    ]

    return (
        <div ref={certificatesRef} className="bg-[#000] text-[#fff] font-chakra">
            <div className="container max-[1536px]:px-7 mx-auto pt-10 pb-20 border-t-[2px] border-white">
                <h1 className="relative text-[64px] font-bold font-title w-fit">Certificates & Courses</h1>
                <div className="grid grid-cols-3 gap-4 mt-20">
                    {certificates.map((certificate: ICertificates, index: number) => (
                        <Card key={index} {...certificate} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Certificates