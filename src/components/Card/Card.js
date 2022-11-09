import project1 from '../../assets/images/project1.jpg';
import reactWeatherApp from '../../assets/images/reactWeatherApp.png';
import passwordGen from "../../assets/images/passwordGen.png" ;
import ipAddress from "../../assets/images/ipAddress.png";
import clockApp from "../../assets/images/clockApp.png";
import ParagraphText from "../ParagraphText/ParagraphText"; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Card = ({img, text, positionClass, scrollTo}) => {
    return (
        <motion.div className={positionClass} 
            whileHover={{opacity:0.69}}
            whileTap={{scale:0.98, opacity:0.69}}
        >
            <Link
                exact
                to="/projects"
            >
                <div className="card__img">
                    <img src={
                        {
                            passwordGen:passwordGen,
                            reactWeatherApp:reactWeatherApp,
                            ipAddress:ipAddress,
                            clockApp:clockApp,

                        }[img]
                    } alt="project-demo" />
                </div>
                <div className="card__info">
                    <p className='card__text'><ParagraphText text={text}/></p>
                </div>
            </Link>

            
        </motion.div>
    )
}

export default Card