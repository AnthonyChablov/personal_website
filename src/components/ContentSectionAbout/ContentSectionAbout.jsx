import ParagraphText from "../ParagraphText/ParagraphText";
import climbingPic from "../../assets/images/climbingPic.jpg";
import heroBackground from "../../assets/images/climbingPic.jpg";
import { motion } from "framer-motion";
const ContentSectionAbout = () => {
    return (
        <div className="content-section-about"
            
        >
            <motion.div className="container "
                initial={{
                    opacity:0,  
                }}
                whileInView={{opacity:1, }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="content-section-about__wrapper ">
                    <div className="wrapper__text">
                        <p>Welcome to my portfolio site! 👋</p>  
                        <p>I am an enthusiastic, and fast-learning second-year computer-programming student at Seneca College. </p>
                        <p>I specialize in Front-End and Full-Stack Web development with a passion for UI/UX design. </p>
                        <p>I strive to create highly responsive and interactive web and mobile applications.  I am fluent in JavaScript, HTML and CSS. 👨‍💻</p>
                        <p>The JavaScript frameworks and libraries I use are React.js, Express.js, GreenSock (GSAP) and Framer-Motion.</p>  
                        <p>⁂ Currently, I am looking for internships and junior positions as a Front-End / Full-Stack Web Developer.</p>
                    </div>
                    <div className="wrapper__container">
                        <img className="container__img" src={climbingPic} alt="rock-climbing-pic" />
                    </div>
                </div>
               

            </motion.div>
        </div>
    )
}

export default ContentSectionAbout