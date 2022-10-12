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

                        <form class="contact-form">
                            <div class="contact-form__field">
                                <input id="name" class="input-text js-input" type="text" required/>
                                <label class="label" for="name">Name*</label>
                            </div>
                            <div class="contact-form__field">
                                <input id="email" class="input-text js-input" type="email" required/>
                                <label class="label" for="email">E-mail*</label>
                            </div>
                            <div class="contact-form__field">
                                <input id="message" class="input-text js-input" type="text" required/>
                                <label class="label" for="message">Message*</label>
                            </div>
                            <div class="contact-form__field contact-form__field--align">
                                <input class="submit-btn" type="submit" value="Send Message"/>
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