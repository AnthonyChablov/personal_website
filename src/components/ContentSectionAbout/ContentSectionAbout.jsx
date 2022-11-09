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
                        <p>Welcome to my portfolio site!</p>  
                        <p>I am an enthusiastic, and fast-learning second-year computer-programming student at Seneca College. </p>
                        <p>I specialize in Front-End and Full-Stack web development with a passion for UI/UX design.  I strive to create highly responsive, mobile friendly and interactive web and mobile applications.  I am fluent in JavaScript, HTML CSS </p>
                        <p>The JavaScript frameworks I commonly use are React.js for Front-End, Express.js / Node.js for Backend and GSAP / Framer-Motion for Animations.</p>  
                        <p>I am currently looking for internships and junior positions as a Front-End / Full-Stack Web Developer.</p>
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