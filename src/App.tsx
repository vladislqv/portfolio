import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import About from "./components/About.tsx";
import {MutableRefObject, useRef} from "react";

function App() {
    const homeRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;
    const aboutRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;
    const resumeRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;
    const certificatesRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;
    const portfolioRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;

    const refs = {homeRef, aboutRef, resumeRef, certificatesRef, portfolioRef}
    return (
        <>
            <div ref={homeRef} className="flex flex-col h-screen">
                <Header refs={refs}/>
                <Hero/>
            </div>
            <About aboutRef={refs.aboutRef}/>
        </>
    )
}

export default App
