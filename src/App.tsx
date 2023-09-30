import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import About from "./components/About.tsx";
import {useEffect, useRef} from "react";
import Resume from "./components/Resume.tsx";
import Certificates from "./components/Certificates.tsx";
import Portfolio from "@/components/Portfolio.tsx";
import ContactMe from "@/components/ContactMe.tsx";
import {ThemeProvider} from "@/components/theme-provider"
import Footer from "@/components/Footer.tsx";
import ScrollUp from "@/components/ScrollUp.tsx";

function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);
    const certificatesRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactMeRef = useRef<HTMLDivElement>(null);

    const refs = {homeRef, aboutRef, resumeRef, certificatesRef, portfolioRef, contactMeRef}

    const rootElement = document.getElementById("root");

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            const { pageX:clientX, pageY:clientY,  } = ev;
            rootElement.style.setProperty("--x", `${clientX}px`);
            rootElement.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div ref={homeRef} className="flex flex-col h-screen relative">
                    <Header refs={refs}/>
                    <Hero/>
                </div>
                <About aboutRef={refs.aboutRef}/>
                <Resume resumeRef={refs.resumeRef}/>
                <Certificates certificatesRef={refs.certificatesRef}/>
                <Portfolio portfolioRef={refs.portfolioRef}/>
                <ContactMe contactMeRef={refs.contactMeRef}/>
                <Footer/>
                <ScrollUp homeRef={homeRef}/>
            </ThemeProvider>

        </>
    )
}

export default App
