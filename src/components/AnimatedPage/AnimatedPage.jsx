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
      filter: 'blur(5px)'
    }
}
const AnimatedPage = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit"
      transition={{duration:0.296}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage