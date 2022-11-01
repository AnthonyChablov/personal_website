import ParagraghText from '../ParagraphText/ParagraphText'
import Box from '../Box/Box';
import { motion } from 'framer-motion';
const ContentSectionSkills = () => {
  return (
    <motion.div className='content-section-skills'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
        <div className="content-section-skills__wrapper">
            <div className="container">
              <div className="content-section-skill__content">
                <div className="content-section-skill__text">
                  <motion.h3 className="content-section-skills__title"
                    initial={{
                      opacity:0,  
                      
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >My Skills.</motion.h3>
                  <motion.div className="content-section-skills__paragraph"
                    initial={{
                      opacity:0,  
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <ParagraghText text={'Developing highly interactive Front-End / User Interfaces for web and mobile applications.'}/>
                    <ParagraghText text={'Working as a team to solve problems.'}/>
                    <ParagraghText text={'Integration of third party services such as Firebase.'}/>
                    <ParagraghText text={'Version control using Git.'}/>
                  </motion.div>
                </div>
                <motion.div className="content-section-skills__card"
                  initial={{
                    opacity:0,  
                  }}
                  whileInView={{opacity:1}}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="content__row">
                    <Box iconName={'html'} text={'Html-5'}/>
                    <Box iconName={'css'} text={'Css'}/>
                    <Box iconName={'scss'} text={'Scss'}/>
                    <Box iconName={'tailwind'} text={'Tailwind'}/>
                  </div>

                  <div className="content__row">
                    <Box iconName={'javascript'} text={'javascript'}/>
                    <Box iconName={'typescript'} text={'typescript'}/>
                    <Box iconName={'react'} text={'react.js'}/>
                    <Box iconName={'nodeJS'} text={'Node.js'}/>
                  </div>

                  <div className="content__row">
                    <Box iconName={'npm'} text={'npm'}/>
                    <Box iconName={'database'} text={'Sql-database'}/>
                    <Box iconName={'python'} text={'python'}/>
                    <Box iconName={'firebase'} text={'firebase'}/>
                  </div>
                </motion.div>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ContentSectionSkills