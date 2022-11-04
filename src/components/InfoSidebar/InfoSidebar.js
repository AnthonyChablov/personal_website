import InfoContent from "../InfoContent/InfoContent";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {FaDiscord} from "react-icons/fa";
import { motion } from "framer-motion";
const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const Info = () => {
    return (
        <div className="info ">
            <InfoContent header={'Prefer Email?'} subContent={'achablov@gmail.com'}/>
            <InfoContent header={'Or Telegram?'} subContent={'+123 4444 1212'}/>
            <InfoContent header={'Location'} subContent={'Toronto, Canada'}/>
            
            <div className="info__socials">
                <p>Find me Online</p>
                <div className="info__links">
                    <motion.a className="info__icon" 
                        whileHover={{ color:'blue' }}
                        transition={{delay : 0.05, ...transition}}
                        target={'_blank'} 
                        href="https://github.com/AnthonyChablov">
                            <AiFillGithub size={33}/>
                    </motion.a>
                    <motion.a className="info__icon" 
                        whileHover={{ color:'blue' }}
                        transition={{delay : 0.05, ...transition}}
                        target={'_blank'} 
                        href="https://www.linkedin.com/in/anthony-chablov-7a7a2921a/">
                            <AiFillLinkedin size={33}/>
                    </motion.a>
                    <motion.a className="info__icon" 
                        whileHover={{ color:'blue' }}
                        transition={{delay : 0.05, ...transition}}
                        target={'_blank'} 
                        href="https://discord.com/users/557409807968239616/">
                            <FaDiscord size={33}/>
                    </motion.a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Info