import {AnimatePresence, stagger, useAnimate} from "framer-motion";
import arrowUp from "../assets/arrow-up.svg"
import {RefObject, useEffect, useState} from "react";

function ScrollUp({homeRef}: { homeRef: RefObject<HTMLDivElement> }) {

    const [scope, animate] = useAnimate()


    const scrollToHome = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const [isHomeInView, setIsHomeInView] = useState(false);

    useEffect(() => {
        if (!isHomeInView) {
            animate(scope.current, { y: [100, 0] }, { delay: stagger(0.2) })
        }
    }, [isHomeInView])

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

    // if (!isHomeInView) {
    return (
        <AnimatePresence>
            {!isHomeInView &&
                <div ref={scope} key="arrowUp"
                     className="fixed right-5 bottom-10 cursor-pointer bg-[#0a0a0a] p-2 rounded-lg z-[49] transition-all hover:bg-[#070707]">
                    <img src={arrowUp} alt="" onClick={scrollToHome}/>
                </div>
            }

        </AnimatePresence>
    )
    // }
}

export default ScrollUp