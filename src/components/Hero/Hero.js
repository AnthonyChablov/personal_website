import { motion, useScroll , useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import img from "../../assets/images/mountain-nature-bg.png";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
        <div className="hero">
            <motion.div className="hero__wrapper"
                initial={{
                    filter:'opacity(0%)'
                }}
                animate={{
                    filter:'opacity(100%)',
                    transition :{delay : 0.25, ...transition}
                }}
                whileHover={{ 
                    scale: 1,
                    transition: { duration: 1 },
                }}
            >
                <motion.div className="hero__content container">
                    <motion.h1 className="hero__header"
                        initial={{
                            filter:'opacity(0%)'
                        }}
                        animate={{
                            filter:'opacity(100%)',
                            transition :{delay : 0.5, ...transition}
                        }}
                    >
                        Hey, I'm Anthony.<br/>
                    </motion.h1>
                    <motion.span className="hero__subtitle"
                        initial={{
                            filter:'opacity(0%)'
                        }}
                        animate={{
                            filter:'opacity(100%)',
                            transition :{delay : 1.2, ...transition}
                        }}
                    >
                        I'm a web-<br/> developer based<br/> 
                        in Toronto.
                    </motion.span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero