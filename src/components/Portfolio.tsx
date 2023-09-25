import {RefObject} from "react";
import PortfolioItem from "@/components/PortfolioItem.tsx";

export interface IPortfolio {
    title: string,
    description?: string,
    gitHubLink: string,
    liveUrl?: string,
    languages: string[],
}

function Portfolio({portfolioRef}: { portfolioRef: RefObject<HTMLDivElement> | undefined }) {
    
    const portfolioItems: IPortfolio[] = [
        {
            title: "Ethernaut Challenges",
            description: "Some solved ethernaut challenges.",
            gitHubLink: "https://github.com/ycho-eth/ethernaut-challenges.git",
            languages: ["Solidity"]
        },
        {
            title: "Ethereum Wallet Generator",
            description: "Ethereum pk generator from any string",
            gitHubLink: "https://github.com/ycho-eth/ethereum-wallet-generator.git",
            liveUrl: "https://ethereum-wallet-generator.vercel.app/",
            languages: ["TypeScript", "React"]
        },
        {
            title: "ETH Counting Game",
            description: "A simple smart contract roulette",
            gitHubLink: "https://github.com/ycho-eth/eth-counting-game",
            liveUrl: "https://eth-counting-game.vercel.app/",
            languages: ["JavaScript", "Solidity", "WalletConnect", "Wagmi"]
        },
        {
            title: "Memento Game",
            description: "A simple memento game using ReactJs",
            gitHubLink: "https://github.com/ycho-eth/memento.git",
            liveUrl: "https://memento-three.vercel.app/",
            languages: ["JavaScript", "React", "PWA"]
        },

    ]

    return (
        <div className="bg-[#000] text-[#fff] font-chakra" ref={portfolioRef}>
            <div className="container mx-auto py-20 border-t-[2px] border-white">
                <h1 className="relative text-6xl font-bold font-title w-fit">Portfolio</h1>
                <div className="grid grid-cols-4 gap-4 mt-20 max-[1500px]:grid-cols-3 max-[1180px]:grid-cols-2 max-md:grid-cols-1">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Portfolio