import ParagraphText from "../ParagraphText/ParagraphText";
import climbingPic from "../../assets/images/climbingPic.jpg";
const ContentSectionAbout = () => {
    return (
        <div className="content-section-about">
            <div className="content-section-about__wrapper container">
                <div className="wrapper__text">
                    <p>Ea voluptates odit non accusamus nihil rem voluptatem perspiciatis ex quam numquam. Cum expedita doloremque rem Quis voluptatem et vitae velit et soluta mollitia aut voluptatum illo qui rerum facilis. Et enim et fugiat omnis eum voluptate internos eos nemo perspiciatis aut expedita natus. Et soluta autem et earum consequatur ab voluptatem quos qui repudiandae soluta vel magnam mollitia hic veniam repudiandae. Hic pariatur possimus et voluptas voluptas in reprehenderit commodi qui veritatis autem qui quia ratione eum corporis aspernatur.</p>
                    <p>Lorem ipsum dolor sit amet. Et accusamus eius qui internos dolorum non magnam voluptate ab atque tempore qui voluptatem ipsam ab quia pariatur eum provident omnis. Sed eaque quisquam sit dolorem reprehenderit vel inventore error.</p>
                </div>
                <div className="wrapper__container">
                    <img className="container__img" src={climbingPic} alt="rock-climbing-pic" />
                </div>

            </div>
        </div>
    )
}

export default ContentSectionAbout