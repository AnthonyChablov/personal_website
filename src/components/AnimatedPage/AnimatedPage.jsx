import { motion } from "framer-motion"
const animations ={
    initial:{
      opacity:0,
      x:'100vw'
    },
    animate:{
      opacity:1, 
      x:'0vw'
    },
    exit:{
      opacity:0, 
      x:'-100vw',
      
    }
}
const AnimatedPage = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit"
      transition={{duration:0.3}}
      
      dragDirectionLock 
      
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage