import ParagraphText from "../ParagraphText/ParagraphText";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
const ContentSectionContact = () => {
    return (
        <div className="content-section-contact"
            
        >
            <div className="content-section-contact__wrapper container">
                <motion.h1 className="wrapper__header"
                    initial={{
                        opacity:0,  
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Interested in collaborating?
                </motion.h1>
                <motion.div className="wrapper__text"
                    initial={{
                        opacity:0,  
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ParagraphText text={'I am always open to discussing new projects and employment opportunities. We should queue up a time to chat.'}/>
                    <ParagraphText text={"I'll bring the coffee 😀"}/>
                </motion.div>
                <motion.div className="wrapper__button"
                    initial={{
                        opacity:0,  
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button linkTo={'/Contact'} text={"Start a Conversation"} bgColor={'blue'}/>
                </motion.div>
            </div>
        </div>
    )
}

export default ContentSectionContact