import InfoSidebar from "../InfoSidebar/InfoSidebar";
import {motion} from 'framer-motion';
const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const Form = () => {
    return (
        <div className="form ">
            <div className="form__wrapper container">
                <div className="form__params">
                    <div className="form__content ">
                        <p className="form__text">
                                      I'm currently available to take on new projects, 
                            so feel free to send me a message about anything that 
                            you want to run past me.
                        </p>

                        <form className="contact-form">
                            <div className="contact-form__wrapper">
                                <div className="contact-form__field contact-form__name">
                                    <input id="name" className="input-text js-input" type="text" required/>
                                    <label className="label" htmlFor="name">Name*</label>
                                </div>
                                <div className="contact-form__field contact-form__email">
                                    <input id="email" className="input-text js-input" type="email" required/>
                                    <label className="label" htmlFor="email">E-mail*</label>
                                </div>
                            </div>
                            
                            <div className="contact-form__field">
                                <input id="message" className="input-text js-input" type="text" required/>
                                <label className="label" htmlFor="message">Message*</label>
                            </div>
                            <motion.div className="contact-form__field"
                                
                            >
                                <motion.input className="submit-btn" 
                                    type="submit" 
                                    value="Send Message"
                                    whileHover={{ backgroundColor: '#8a8b8f' }}
                                    transition={{delay : 0.02}}
                                />
                            </motion.div>
                            
                        </form>
                        
                    </div>
                    
                </div>
                <InfoSidebar/>
            </div>
            
            


        </div>
    )
}

export default Form