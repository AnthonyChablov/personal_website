import InfoSidebar from "../InfoSidebar/InfoSidebar";
const Form = () => {
    return (
        <div className="form ">
            <div className="form__wrapper container">
                
                <div className="form__params">
                    <div className="form__content ">
                        <p >
                                      I'm currently avaliable to take on new projects, 
                            so feel free to send me a message about anything that 
                            you want to run past me.
                        </p>

                        <form className="contact-form">
                            <div className="contact-form__field">
                                <input id="name" className="input-text js-input" type="text" required/>
                                <label className="label" htmlFor="name">Name*</label>
                            </div>
                            <div className="contact-form__field">
                                <input id="email" className="input-text js-input" type="email" required/>
                                <label className="label" htmlFor="email">E-mail*</label>
                            </div>
                            <div className="contact-form__field">
                                <input id="message" className="input-text js-input" type="text" required/>
                                <label className="label" htmlFor="message">Message*</label>
                            </div>
                            <div className="contact-form__field contact-form__field--align">
                                <input className="submit-btn" type="submit" value="Send Message"/>
                            </div>
                        </form>
                        
                    </div>
                   
                </div>
                <InfoSidebar/>
            </div>
            
            


        </div>
    )
}

export default Form