import arrowUp from "../assets/arrow-up.svg"
import {RefObject, useEffect, useState} from "react";

function ScrollUp({homeRef}: { homeRef: RefObject<HTMLDivElement> }) {

    const scrollToHome = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const [isHomeInView, setIsHomeInView] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsHomeInView(true);
                } else {
                    setIsHomeInView(false);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            if (homeRef.current) {
                observer.unobserve(homeRef.current);
            }
        };
    }, []);

    if (!isHomeInView) {
        return (
            <div
                 className="fixed right-3 bottom-10 cursor-pointer bg-[#0e0e0e] p-2 rounded-lg z-[49] transition-all hover:bg-[#070707]">
                <img src={arrowUp} alt="" onClick={scrollToHome}/>
            </div>
        )
    }
}

export default ScrollUp