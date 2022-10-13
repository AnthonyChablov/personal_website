import { Link } from "react-router-dom";
import img from "../../assets/images/mountain-nature-bg.png";
import { motion } from "framer-motion";
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Layout = () => {
    return (
        <div className="layout">
            <motion.div className="layout__content"
                initial={{
                    filter:'opacity(0%)'
                }}
                animate={{
                    filter:'opacity(100%)',
                    transition :{delay : 0.25, ...transition}
                }}
            >
                <Link to={`/home`}>
                    <div className="layout__img">
                        <motion.img 
                            className="layout__img--formatting"
                            src={img} 
                            alt="nature-background"
                            whileHover={{ scale: 1.1 }}
                            transition={transition}
                            
                        />
                    </div>
                </Link>
                <motion.div
                    className="layout__text"
                    exit={{ opacity: 0 }}
                    transition={transition}
                >
                    @@@@@@@
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Layout