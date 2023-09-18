import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import About from "./components/About.tsx";
import {useRef} from "react";
import Resume from "./components/Resume.tsx";
import Certificates from "./components/Certificates.tsx";

function App() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const resumeRef = useRef<HTMLDivElement | null>(null);
    const certificatesRef = useRef<HTMLDivElement | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);

    const refs = {homeRef, aboutRef, resumeRef, certificatesRef, portfolioRef}
    return (
        <>
            <div ref={homeRef} className="flex flex-col h-screen">
                <Header refs={refs}/>
                <Hero/>
            </div>
            <About aboutRef={refs.aboutRef}/>
            <Resume resumeRef={refs.resumeRef} />
            <Certificates certificatesRef={refs.certificatesRef} />
        </>
    )
}

export default App
