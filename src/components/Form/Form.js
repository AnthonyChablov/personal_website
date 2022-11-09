import InfoSidebar from "../InfoSidebar/InfoSidebar";
import {motion} from 'framer-motion';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9sizgve', 'template_mnyg5by', form.current, 'nYid0rnWa4oP24TBH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div className="form ">
            <motion.div className="form__wrapper container"
                initial={{
                    opacity:0,  
                }}
                whileInView={{opacity:1}}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="form__params">
                    <div className="form__content ">
                        <p className="form__text">
                                      I'm currently available to take on new projects and employment opportunites, 
                            so feel free to send me a message about anything that 
                            you want to discuss.
                        </p>
                        <form className="contact-form"
                            ref={form} 
                            onSubmit={sendEmail}
                        >
                            <div className="contact-form__wrapper">
                                <div className="contact-form__field contact-form__name">
                                    <input id="name" className="input-text js-input" type="text" required
                                        name="user_name"
                                    />
                                    <label className="label" htmlFor="name">Name*</label>
                                </div>
                                <div className="contact-form__field contact-form__email">
                                    <input id="email" className="input-text js-input" type="email" required
                                        name="user_email"
                                    />
                                    <label className="label" htmlFor="email">E-mail*</label>
                                </div>
                            </div>
                            
                            <div className="contact-form__field">
                                <textarea id="message" className="input-text js-input" type="text"  
                                required name="message"/>
                                <label className="label" htmlFor="message" >Message*</label>
                            </div>
                            <motion.div className="contact-form__field"
                            >
                                <motion.input className="submit-btn" 
                                    type="submit" 
                                    value="Send Message"
                                    whileHover={{ backgroundColor: '#8a8b8f' }}
                                    transition={{delay : 0.013}}
                                    
                                />
                            </motion.div>
                        </form>
                    </div>
                </div>
                <InfoSidebar/>
            </motion.div>
            
        </div>
    )
}

export default Form