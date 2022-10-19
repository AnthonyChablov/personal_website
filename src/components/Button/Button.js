import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'; 
export const Button = ({linkTo, text, bgColor}) => {
  return (
    <Link
      exact
      to={linkTo}
    >
      <motion.div className='button'
        style={{bgColor}}
      >
        <p className='button__content'>{text}</p>
      </motion.div>
    </Link>
    
  )
}