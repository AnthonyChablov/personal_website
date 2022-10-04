import ParagraphText from "../ParagraphText/ParagraphText";
const ContentSection = ({bgColorClass, insertClass}) => {
    return (
        <div className={`${bgColorClass} ${insertClass}`}>
            <ParagraphText text={'I am an enthusiastic, and fast-learning second-year computer-programming student.'}/>
            <ParagraphText text={'I specialize in Front-End and Full-Stack web development and have a passion for UI/UX Design.'}/>
            <ParagraphText text={'My ultimate goal is to create user-friendly, responsive websites and mobile applications.'}/>
            <ParagraphText text={'When I am not programming, I love rock-climbing 🧗‍♂️ and music production 🎧!'}/>
        </div>
    )
}

export default ContentSection