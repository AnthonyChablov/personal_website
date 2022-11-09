import { motion } from "framer-motion"
const NotFound = () => {
    return (
        <motion.div className="not-found"
            initial={{
                opacity:0,  
            }}
            whileInView={{opacity:1}}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="not-found__wrapper">
                    <h1 className="not-found__header">Error 404</h1>
                    <p className="not-found__text">The page you are looking for cannot be found!</p>
                </div>
            </div>
        </motion.div>
    )
}

export default NotFound