import project1 from '../../assets/images/project1.jpg';
import ParagraphText from "../ParagraphText/ParagraphText"; 

import { motion } from 'framer-motion';
const Card = ({img, text, positionClass, scrollTo}) => {
    return (
        <motion.a className={positionClass} href={`/projects#project-${scrollTo}`} 
            whileHover={{opacity:0.69}}
            whileTap={{scale:0.98}}
        >
            
            <div className="card__img">
                <img src={project1} alt="project-demo" />
            </div>
            <div className="card__info">
                <p className='card__text'><ParagraphText text={text}/></p>
                {/* <div className="card__links">
                    <a href={codeLink}><Button text={'visit site'} buttonType={'visitSite'}/></a>
                    <a href={codeLink}><Button text={'code'} buttonType={'visitSite'}/></a>
                </div> */}
            </div>
        </motion.a>
    )
}

export default Card