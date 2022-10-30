import project1 from '../../assets/images/project1.jpg';
import ParagraphText from '../ParagraphText/ParagraphText';
import {motion} from 'framer-motion'; 
const Project = ({img, title, description, btn1, btn2, id, siteLink, codeLink}) => {
    return (
        <div className="project">
            <div className="project__wrapper ">
                <div className="project__image">
                    <img src={project1} alt="project-image" />
                </div>
                <div className="wrapper">
                    <div className="project__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="project__description">
                        <p><ParagraphText text={description}/></p>
                    </div>
                    <div className="project__link">
                        <div className="link__wrapper">
                            <motion.a href={siteLink}
                                whileTap={{ scale: 0.95 }}
                                whileFocus={{ scale: 1 }}
                                whileHover={{}}
                            >
                                <div className='link__btn1'>
                                    <p className='btn1__text'>{btn1}</p>
                                </div>
                            </motion.a>
                            <motion.a href={codeLink}
                                whileTap={{ scale: 0.95 }}
                                whileFocus={{ scale: 1 }}
                            >
                                <div className="link__btn2">
                                    <p className='btn2__text'>{btn2}</p>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project