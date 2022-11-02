import Card from "../Card/Card";
import Cursor from "../Cursor/Cursor";
import { motion } from "framer-motion";
const ContentSectionProjects = () => {
    return (
        <motion.div className="content-section-projects "
        >
            <div className="content-section-projects__wrapper container">
                <motion.h2 className="content-section-projects__title"
                    initial={{
                        filter:'opacity(0%)'
                    }}
                    whileInView={{filter:'opacity(100%)'}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >My Projects.</motion.h2>
                <motion.div className="content-section-projects__project "
                    initial={{
                        opacity:0,
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card 
                        positionClass={'card card-left'} 
                        img={'passwordGen'} text={'⁂ Password Generator Application'} 
                        scrollTo={1}
                    />
                    <Card positionClass={'card card-right'} img={'ipAddress'} text={'⁂ IP Address Tracker'} scrollTo={2}/>
                </motion.div>
                {/* 1000 x 667 */}
                <motion.div className="content-section-projects__project"
                    initial={{
                        opacity:0,
                    }}
                    whileInView={{opacity:1}}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card positionClass={'card card-left'} img={'reactWeatherApp'} text={'⁂ Weather Application'} scrollTo={3}/>
                    <Card positionClass={'card card-right'} img={'clockApp'} text={'⁂ Clock Application'} scrollTo={4}/>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContentSectionProjects;


