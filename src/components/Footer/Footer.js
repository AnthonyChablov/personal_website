import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const Footer = () => {
    return (
        <motion.div className="footer"
            initial={{
                opacity:0,  
            }}
            exit={{
                opacity:0
            }}
            whileInView={{opacity:1}}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
        >
            <motion.div className="footer__wrapper container"
                initial={{
                    opacity:0,  
                }}
                exit={{
                    opacity:0
                }}
                whileInView={{opacity:1}}
                transition={{ delay: 0.05 }}
                viewport={{ once: true }}
            >
                <div className="footer__header">
                    <h6 className="footer__title">
                        Anthony Chablov
                    </h6>
                    <p className="footer__subtitle">
                        © Built by Anthony Chablov. Powered by React and Firebase.
                    </p>
                    <motion.a className="footer__subtitle" 
                        href="https://github.com/AnthonyChablov/personal_website"
                        whileHover={{ color: '#747baf' }}
                        transition={{delay : 0.013}}
                        target="_blank"
                    >
                        ⁂ View source code for this site.
                    </motion.a>
                </div>
                <div className="footer__navigation">
                    <div className="footer__links">
                        <ul className='footer__column'>
                            <li className="">
                                <Link
                                    exact
                                    to="/home"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >Home</motion.p>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    exact
                                    to="/about"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >About</motion.p>
                                </Link>
                            </li>
                            <li className="">
                            
                            </li>
                            <li className="">
                            <Link
                                exact
                                to="/contact"
                                className="column__link"
                            >
                                <motion.p
                                    whileHover={{ color: '#747baf' }}
                                    transition={{delay : 0.013}}
                                >Contact Me</motion.p>
                            </Link>
                            </li>
                        </ul>
                        <ul className="footer__column">
                            <li>
                                <Link
                                    exact
                                    to="/resume"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >Resume</motion.p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    to="/*"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >404</motion.p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__socials">
                        <ul className="footer__column">
                            <li>
                                <a href="https://github.com/AnthonyChablov"
                                    className="column__link"
                                    target={'_blank'}
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >Github</motion.p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/anthony-chablov-7a7a2921a/"
                                    className="column__link"
                                    target={'_blank'}
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >LinkedIn</motion.p>
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com/users/557409807968239616/"
                                    className="column__link"
                                    target={'_blank'}
                                >
                                    <motion.p
                                        whileHover={{ color: '#747baf' }}
                                        transition={{delay : 0.013}}
                                    >Discord</motion.p>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            
            
        </motion.div>
    )
}

export default Footer