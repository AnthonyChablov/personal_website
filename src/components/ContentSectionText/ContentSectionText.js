import ParagraphText from "../ParagraphText/ParagraphText";
import { motion } from "framer-motion";
/* 
initial={{
    opacity:0,  
    x:"-100%"
}}
whileInView={{opacity:1,  x:0}}
transition={{ delay: 1 }}
viewport={{ once: false }} */
const ContentSectionText = ({ contentType,bgColorClass, insertClass}) => {
    if(contentType === 'heroText'){    
        return (
            <motion.section className={`${bgColorClass} ${insertClass} content-section `}>
                <motion.div className=" content-section__wrapper container"
                    initial={{
                        opacity:0,  
                        
                    }}
                    whileInView={{opacity:1, }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <ParagraphText text={'          I am an enthusiastic, and fast-learning second-year computer-programming student.'}/>
                        <ParagraphText text={'I specialize in Front-End and Full-Stack web development and have a passion for UI/UX Design.'}/>
                        <ParagraphText text={'My ultimate goal is to create user-friendly, responsive websites and mobile applications.'}/>
                        <ParagraphText text={'When I am not programming, I love rock-climbing 🧗‍♂️ and music production 🎧!'}/>
                        <ParagraphText text={'I am currently looking for internships and junior roles as a Front-End / Full-Stack Web Developer.'}/>
                    </div>
                </motion.div>
            </motion.section>
        )
    }else if( contentType === 'aboutText'){
        return(
        <section className={`${bgColorClass} ${insertClass} content-about `}>
            <div className=" content-about container">
                <div className="content-about__wrapper">
                    <div className="content-about__text">
                        <ParagraphText text={'          I am '}/>
                        <ParagraphText text={'Lorem ipsum dolor sit amet. Et accusamus eius qui internos dolorum non magnam voluptate ab atque tempore qui voluptatem ipsam ab quia pariatur eum provident omnis. Sed eaque quisquam sit dolorem reprehenderit vel inventore error.'}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }else{
        return(
            <motion.section className={`${bgColorClass} ${insertClass} content-section `}
                initial={{
                    opacity:0,  
                    
                }}
                whileInView={{opacity:1, }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            > 
                <div className=" content-section__wrapper container">
                    <div>
                        <ParagraphText text={'          I am an enthusiastic, and fast-learning computer-programming student at Seneca College'}/>
                        <ParagraphText text={'I graduated with a Bachelors degree from the University of Waterloo and am fluent in Javascript,'}/>
                        <ParagraphText text={'React and of course HTML/CSS. Front-End and Full-Stack Web Development is what I specialize in.'}/>
                        <ParagraphText text={'I have a passion for UI/UX Design and strive to create user-friendly, responsive and interactive'}/>
                        <ParagraphText text={'websites and mobile applications. I’m a lifelong learner and always strive to improve my skills -'}/>
                        <ParagraphText text={'I am currently taking a course on full stack web development using Express and Node.js!'}/>
                    </div>
                </div>
            </motion.section>
        )
    }
    
}

export default ContentSectionText