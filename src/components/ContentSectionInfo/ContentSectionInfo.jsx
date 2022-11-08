
import { motion } from "framer-motion";
const ContentSectionEducation = () => {
  return (
    <div className="content-section-info ">
        <motion.div className="container"
          initial={{
            opacity:0,  
            
          }}
          whileInView={{opacity:1, }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className=" content-section-info__wrapper ">
            <div className="wrapper__education">
              <h2 className="education__header">My Education.</h2>
              <div className="education__text">
                <p>
                  Seneca College Computer Programming and Analysis
                </p>
                <p>
                  University Of Waterloo Bachelor Of Environmental Studies
                </p>
              </div>
            </div>
            <div className="wrapper__experience">
              <h2 className="experience__header">My Experience.</h2>
              <div className="experience__text">
                <p>
                  1-year Freelance Web-Developer, Front-End and Full-Stack
                </p>
                <p>
                  1-year fluency in JavaScript and React.js 
                </p>
              </div>
            </div>
            {/* <div className="wrapper__socials">
              <h2 className="socials__header">My Socials.</h2>
              <div className="socials__text">
                <p>
                  LinkedIn
                </p>
                <p>
                  GitHub
                </p>
                <p>
                  Discord
                </p>
              </div>
            </div> */}
            

          </div>
            
              
        </motion.div>
    </div>
  )
}

export default ContentSectionEducation