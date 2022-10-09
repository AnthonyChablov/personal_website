import { motion, useScroll , useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import img from "../../assets/images/mountain-nature-bg.png";

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
        <motion.div 
            className="hero"
        >
            <motion.div 
                className="hero__content"
                initial={{
                    width: '90vw', 
                    maxWidth: "30em",
                    y:'104.5%',
                    x:'60.9%',
                    borderRadius:'26px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    position:'static',
                    overflow:'hidden',
                    zIndex:0,
                    
                }}
                animate={{
                    position:"absolute",
                    borderRadius:0,
                    transition:{delay: .2, ...transition},
                    //height:window.innerWidth > 1440 ? 800: 400, /* always much better to use a resize hook to determine when a browser has resized */
                    width: '100vw', 
                    y:0,
                    x:0,
                    
                }}
            >
                <motion.div 
                    className="hero__img"
                    initial={{
                        
                        
                    }}
                >
                    <motion.img 
                        src={img} 
                        alt="nature-background" 
                        initial={{
                            display:'block',
                            scale:1.1
                        }}
                        animate={{
                            transition:{delay: .2, ...transition}
                        }}
                    />
                </motion.div>
            </motion.div>
            
        </motion.div>
    )
}

export default Hero




{/* <motion.div className="hero" 
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
        </motion.div> */}