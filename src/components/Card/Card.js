import project1 from '../../assets/images/project1.jpg';
import ParagraphText from "../ParagraphText/ParagraphText"; 
import {AiFillGithub} from 'react-icons/ai';
import {Button} from '../Button/Button';

const Card = ({img, text, positionClass, projectLink, codeLink}) => {
    return (
        <a className={positionClass} href="/projects" name='project-4'>
            
                <div className="card__img">
                    <img src={project1} alt="project-demo" />
                </div>
                <div className="card__info">
                    <p className='card__text'><ParagraphText text={text}/></p>
                    {/* <div className="card__links">
                        <a href={codeLink}><Button text={'visit site'} buttonType={'visitSite'}/></a>
                        <a href={codeLink}><Button text={'code'} buttonType={'visitSite'}/></a>
                    </div> */}
                </div>
            
        </a>
    )
}

export default Card