import ParagraphText from "../ParagraphText/ParagraphText";
import { motion } from "framer-motion";
const ContentSectionText = ({ contentType,bgColorClass, insertClass}) => {
    if(contentType === 'heroText'){
        return (
            <motion.section className={`${bgColorClass} ${insertClass} content-section `}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className=" content-section__wrapper container">
                    <div>
                        <ParagraphText text={'          I am an enthusiastic, and fast-learning second-year computer-programming student.'}/>
                        <ParagraphText text={'I specialize in Front-End and Full-Stack web development and have a passion for UI/UX Design.'}/>
                        <ParagraphText text={'My ultimate goal is to create user-friendly, responsive websites and mobile applications.'}/>
                        <ParagraphText text={'When I am not programming, I love rock-climbing 🧗‍♂️ and music production 🎧!'}/>
                    </div>
                </div>
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
    }
    
}

export default ContentSectionText