import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'; 
import {BsChatLeftText} from "react-icons/bs"
export const Button = ({buttonType ,linkTo, text, bgColor}) => {
  if(buttonType==='hero'){
    return (
      <Link
        exact
        to={linkTo}
      >
        <motion.div className='button'
          style={{bgColor}}
          whileHover={{ backgroundColor: '#4e4673', color:'white'}}
          whileTap={{ scale: 0.95 , backgroundColor: '#4e4673' }}
          whileFocus={{ scale: 1.2 }}
        >
          <p className='button__content'>{text}</p>
        </motion.div>
      </Link>
    )
  }else if(buttonType==='visitSite'){
    return(
    <motion.div className='button--projects'
        style={{bgColor}}
        whileHover={{ backgroundColor: '#4e4673', color:'white'}}
        whileTap={{ scale: 0.95 , backgroundColor: '#4e4673' }}
        whileFocus={{ scale: 1.2 }}
      >
        <p className='button--projects__content'>{text}</p>
    </motion.div>)
  }else{
    return (
      
        <Link
          exact
          to={linkTo}
        >
          <motion.div className='button--contact'
            style={{bgColor}}
           
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.2 }}
           
          >
            <motion.div className="button--contact__icon"
                
            >
              <BsChatLeftText className='button--contact__icon' 
                size={23} 
                
              />
            </motion.div> 
            
            <motion.p className='button--contact__content'
              
            >
              {text}
            </motion.p>
            
          </motion.div>
        </Link>
      
    )
  }
  
}