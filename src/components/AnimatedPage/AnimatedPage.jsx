import { motion } from "framer-motion"
const animations ={
    initial:{
      filter: 'opacity(0%)  ',
      x:'100vw'
    },
    animate:{
      filter: 'opacity(100%) ', 
      x:'0vw'
    },
    exit:{
      filter: 'opacity(100%) blur(2px)', 
      x:'-100vw'
    }
}
const AnimatedPage = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit"
      transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage