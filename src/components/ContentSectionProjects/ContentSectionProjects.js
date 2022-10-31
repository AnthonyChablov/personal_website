import Card from "../Card/Card";
import Cursor from "../Cursor/Cursor";
import { motion } from "framer-motion";
const ContentSectionProjects = () => {
    return (
        <motion.div className="content-section-projects "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="content-section-projects__wrapper container">
                <h2 className="content-section-projects__title">My Projects.</h2>
                <div className="content-section-projects__project ">
                    <Card 
                        positionClass={'card card-left'} 
                        img={'passwordGen'} text={'⁂ Password Generator Application'} 
                        scrollTo={1}
                    />
                    <Card positionClass={'card card-right'} img={'ipAddress'} text={'⁂ IP Address Tracker'} scrollTo={2}/>
                </div>
                {/* 1000 x 667 */}
                <div className="content-section-projects__project">
                    <Card positionClass={'card card-left'} img={'reactWeatherApp'} text={'⁂ Weather Application'} scrollTo={3}/>
                    <Card positionClass={'card card-right'} img={'clockApp'} text={'⁂ Clock Application'} scrollTo={4}/>
                </div>
            </div>
        </motion.div>
    )
}

export default ContentSectionProjects;


