import { motion } from "framer-motion"
const Header = ({title}) => {
  return (
    <motion.div className="header">
      <motion.div className="header__wrapper "
      initial={{
        opacity:'80%',  
      }}
      whileInView={{opacity:'100%'}}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      >
        <div className="header__content container">
          <motion.h1 className="header__title "
            initial={{
              opacity:0,  
            }}
            whileInView={{opacity:1}}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >{title}</motion.h1>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Header