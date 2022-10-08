import { motion, useScroll , useTransform } from "framer-motion";
import { useState, useEffect } from "react";
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const imageDetails = {
        width : 600, 
        height : 300,
    }
const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const [canScroll, setCanScroll] = useState(false);
    useEffect(() => {
        if (canScroll === false) {
          document.querySelector("body").classList.add("no-scroll");
        } else {
          document.querySelector("body").classList.remove("no-scroll");
        }
      }, [canScroll]);
    
    return (
        <motion.div className="hero" 
            onAnimationComplete={() => setCanScroll(true)}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <div className="hero__content container">
                <h1 className="hero__header">
                        Hey, I'm Anthony<br/>
                </h1>
                <span className="hero__subtitle">
                    I'm a web-<br/> developer based<br/> 
                    in Toronto.
                </span>
            </div>

            <div className="hero__button">
                
            </div>
        </motion.div>
    )
}

export default Hero