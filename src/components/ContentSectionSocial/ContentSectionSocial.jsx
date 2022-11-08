import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import ParagraphText from '../ParagraphText/ParagraphText';
import Divider from "../Divider/Divider";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {FaDiscord} from "react-icons/fa";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
const ContentSectionSocial = () => {
  return (
      <div className="content-section-social">
          <div className="content-section-social__wrapper container">
              <motion.h1 className="content-section-social__header"
                  initial={{
                      opacity:0,  
                  }}
                  whileInView={{opacity:1}}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
              >
                  Find me on Social Media. 
              </motion.h1>
              <motion.div className="content-section-social__text"
                    initial={{
                        opacity:0,  
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ParagraphText text={'Please feel free to reach out through social media!'}/>
                    <ParagraphText text={'I would love to connect with you!'}/>
                </motion.div>
              <motion.div className="content-section-social__icon"
                  initial={{
                      opacity:0,  
                  }}
                  whileInView={{opacity:1}}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
              >
                  <motion.a className="icon__link icon__formatting" 
                        whileHover={{ color: '#747baf' }}
                        transition={{delay : 0.05, ...transition}}
                        whileTap={{scale:0.95 , color: '#747baf'}}
                        whileFocus={{scale:1.1}}
                        target={'_blank'} 
                        href="https://github.com/AnthonyChablov">
                            <AiFillGithub size={48} />
                    </motion.a>
                    
                    <motion.a className="icon__link icon__formatting" 
                        whileHover={{ color: '#747baf' }}
                        whileTap={{scale:0.95, color: '#747baf'}}
                        whileFocus={{scale:1.1}}
                        transition={{delay : 0.05, ...transition}}
                        target={'_blank'} 
                        href="https://www.linkedin.com/in/anthony-chablov-7a7a2921a/">
                            <AiFillLinkedin size={48} />
                    </motion.a>
                    <motion.a className="icon__link" 
                        whileHover={{ color: '#747baf' }}
                        whileTap={{scale:0.95, color: '#747baf'}}
                        whileFocus={{scale:1.1}}
                        transition={{delay : 0.05, ...transition}}
                        target={'_blank'} 
                        href="https://discord.com/users/557409807968239616/">
                            <FaDiscord size={48} />
                    </motion.a>
              </motion.div>
              
          </div>
          
      </div>
  )
}

export default ContentSectionSocial