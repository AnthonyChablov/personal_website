import { motion, useScroll , useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Hero = ({heroType}) => {
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
    
    if (heroType === 'Homepage'){
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
                                transition :{delay : 0.2, ...transition}
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
                                transition :{delay : 0.7, ...transition}
                            }}
                        >
                            I'm a web-<br/> developer based<br/> 
                            in Toronto.
                        </motion.span>
                        
                        <motion.div className="hero__button"
                            initial={{
                                filter:'opacity(0%)'
                            }}
                            animate={{
                                filter:'opacity(100%)',
                                transition :{delay : 0.7, ...transition}
                            }}
                        >
                            <Button buttonType={'hero'} text={'My Resumé'} linkTo={"/resume"} style={{backgroundColor:'green'}}/>
                            
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        )
    }else{
        return (
            <div className="hero--secondary">
                <motion.div className="hero__wrapper--secondary"
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
                    <motion.div className="hero__content--secondary container">
                        <motion.h1 className="hero__header--secondary"
                            initial={{
                                filter:'opacity(0%)'
                            }}
                            animate={{
                                filter:'opacity(100%)',
                                transition :{delay : 0.2, ...transition}
                            }}
                        >
                            Hey — I'm Anthony, a ✺ Front-End and ⁂ Full-Stack web-developer from Toronto.
                        </motion.h1>
                        <motion.span className="hero__subtitle--secondary"
                            initial={{
                                filter:'opacity(0%)'
                            }}
                            animate={{
                                filter:'opacity(100%)',
                                transition :{delay : 0.7, ...transition}
                            }}
                        >
                            Based in Toronto, Canada. 
                        </motion.span>
                        <motion.div className="hero__button--secondary"
                            initial={{
                                filter:'opacity(0%)'
                            }}
                            animate={{
                                filter:'opacity(100%)',
                                transition :{delay : 0.7, ...transition}
                            }}
                        >
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        )
    }
}
export default Hero