import ParagraphText from "../ParagraphText/ParagraphText";

const ContentSectionText = ({ contentType,bgColorClass, insertClass}) => {
    if(contentType === 'heroText'){
        return (
            <section className={`${bgColorClass} ${insertClass} content-section `}>
                <div className=" content-section__wrapper container">
                    <div>
                        <ParagraphText text={'          I am an enthusiastic, and fast-learning second-year computer-programming student.'}/>
                        <ParagraphText text={'I specialize in Front-End and Full-Stack web development and have a passion for UI/UX Design.'}/>
                        <ParagraphText text={'My ultimate goal is to create user-friendly, responsive websites and mobile applications.'}/>
                        <ParagraphText text={'When I am not programming, I love rock-climbing 🧗‍♂️ and music production 🎧!'}/>
                    </div>
                </div>
            </section>
        )
    }else if( contentType === 'aboutText'){
        return(
        <section className={`${bgColorClass} ${insertClass} content-about `}>
            <div className=" content-about container">
                <div className="content-about__wrapper">
                    <div className="content-about__text">
                        <ParagraphText text={'Ea voluptates odit non accusamus nihil rem voluptatem perspiciatis ex quam numquam. Cum expedita doloremque rem Quis voluptatem et vitae velit et soluta mollitia aut voluptatum illo qui rerum facilis. Et enim et fugiat omnis eum voluptate internos eos nemo perspiciatis aut expedita natus. Et soluta autem et earum consequatur ab voluptatem quos qui repudiandae soluta vel magnam mollitia hic veniam repudiandae. Hic pariatur possimus et voluptas voluptas in reprehenderit commodi qui veritatis autem qui quia ratione eum corporis aspernatur.'}/>
                        <ParagraphText text={'Lorem ipsum dolor sit amet. Et accusamus eius qui internos dolorum non magnam voluptate ab atque tempore qui voluptatem ipsam ab quia pariatur eum provident omnis. Sed eaque quisquam sit dolorem reprehenderit vel inventore error.'}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }
    
}

export default ContentSectionText