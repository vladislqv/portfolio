import { useState, useEffect } from "react"
import downArrow from "../assets/chevrons-down.svg"

function Hero() {

    const quotes:string[] = [
        "Web3: Powering a  decentralized future one byte at a time.",
        "From centralized systems to Web3: Navigating the next chapter of the digital age.",
        "Reimagining the fabric of the internet with Web3's decentralized weave.",
        "Web3: Where every node is a new opportunity.",
        "Unlocking the true potential of the internet with Web3's decentralized promise.",
        "Web3: Bridging individuality and connectivity in the digital age"
    ]

    interface Props {
        quotes: string[];
        typingSpeed?: number;  // speed at which characters appear, in ms
        delayBetweenQuotes?: number;  // delay before starting the next quote or deletion, in ms
    }
    
    const TypingEffect = ({
        quotes,
        typingSpeed = 100,
        delayBetweenQuotes = 2000
    } : Props) => {
        const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
        const [displayedText, setDisplayedText] = useState('');
        const [charIndex, setCharIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
    
        useEffect(() => {
            let timer: ReturnType<typeof setTimeout>;
    
            if (!isDeleting && charIndex < quotes[currentQuoteIndex].length) {
                timer = setTimeout(() => {
                    setDisplayedText(prevText => prevText + quotes[currentQuoteIndex][charIndex]);
                    setCharIndex(prevCharIndex => prevCharIndex + 1);
                }, typingSpeed);
            } else if (!isDeleting && charIndex === quotes[currentQuoteIndex].length) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenQuotes);
            } else if (isDeleting && displayedText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedText(prevText => prevText.slice(0, -1));
                    setCharIndex(prevCharIndex => prevCharIndex - 1);
                }, typingSpeed);
            } else if (isDeleting && displayedText.length === 0) {
                setIsDeleting(false);
                setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
            }
    
            return () => {
                clearTimeout(timer);
            };
        }, [charIndex, isDeleting, currentQuoteIndex]);
    
        return <div className="font-light">{displayedText}<span className="font-light">_</span></div>;
    }    
    
    

    return (
        <div className="relative w-screen h-[60vh] flex justify-center items-center text-[64px] text-center font-main px-[25%] font-500 italic">
        <TypingEffect quotes={quotes} typingSpeed={50} delayBetweenQuotes={1000} />
            <img className="absolute bottom-[-14rem] animate-bounce" src={downArrow} />
        </div>
    )
}


export default Hero