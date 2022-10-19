import {AiFillHtml5, } from 'react-icons/ai';
import {DiCss3, DiSass, DiReact, DiNodejs, DiNpm, DiPython} from 'react-icons/di';
import {HiDatabase} from "react-icons/hi";
import {SiTypescript, SiJavascript, SiTailwindcss, SiFirebase} from 'react-icons/si';
import {motion} from "framer-motion";
const Box = ({iconName, text}) => {
    return (
        <div className="box">
            <motion.div className='box__wrapper'
                whileHover={{color: "#2e3047"}}
                transition={{delay : 0.02}}
            >
                <div className="box__icon">
                    {
                        {
                            html: <AiFillHtml5 size={60}/>,
                            css: <DiCss3 size={60}/>,
                            scss:<DiSass size={60}/>,
                            react: <DiReact size={60}/>,
                            nodeJS:<DiNodejs size={60}/>,
                            npm: <DiNpm size={60}/>,
                            python: <DiPython size={60}/>,
                            database: <HiDatabase size={60}/>,
                            javascript: <SiJavascript size={55}/>,
                            tailwind: <SiTailwindcss size={60}/>,
                            firebase: <SiFirebase size={60}/>,
                            typescript: <SiTypescript size={57}/>,
                        }[iconName]
                    }
                </div>
                <p className='box__text'>{text}</p>
            </motion.div>
        </div>
    )
}

export default Box