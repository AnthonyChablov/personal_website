import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper container">
                <div className="footer__header">
                    <h6 className="footer__title">
                        Anthony Chablov
                    </h6>
                    <p className="footer__subtitle">
                        © Built by Anthony Chablov. Powered by React.
                    </p>
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
                                        whileHover={{ color: 'blue' }}
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
                                        whileHover={{ color: 'blue' }}
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
                                        whileHover={{ color: 'blue' }}
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
                                        whileHover={{ color: 'blue' }}
                                        transition={{delay : 0.013}}
                                    >Resume</motion.p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    to="/resume"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: 'blue' }}
                                        transition={{delay : 0.013}}
                                    >404</motion.p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__socials">
                        <ul className="footer__column">
                            <li>
                                <Link
                                    exact
                                    to="/resume"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: 'blue' }}
                                        transition={{delay : 0.013}}
                                    >Github</motion.p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    to="/resume"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: 'blue' }}
                                        transition={{delay : 0.013}}
                                    >LinkedIn</motion.p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    exact
                                    to="/resume"
                                    className="column__link"
                                >
                                    <motion.p
                                        whileHover={{ color: 'blue' }}
                                        transition={{delay : 0.013}}
                                    >Discord</motion.p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Footer