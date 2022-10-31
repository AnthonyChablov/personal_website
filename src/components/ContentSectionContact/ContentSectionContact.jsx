import ParagraphText from "../ParagraphText/ParagraphText";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
const ContentSectionContact = () => {
    return (
        <motion.div className="content-section-contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="content-section-contact__wrapper container">
                <h1 className="wrapper__header">
                    Interested in collaborating?
                </h1>
                <div className="wrapper__text">
                    <ParagraphText text={'I am always open to discussing new projects and employment opportunities. We should queue up a time to chat.'}/>
                    <ParagraphText text={"I'll bring the coffee 😀"}/>
                </div>
                <div className="wrapper__button">
                    <Button linkTo={'/Contact'} text={"Start a Conversation"} bgColor={'blue'}/>
                </div>
                
            </div>
            
            
        </motion.div>
    )
}

export default ContentSectionContact