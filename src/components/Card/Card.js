import project1 from '../../assets/images/project1.jpg';
const Card = ({img, text, positionClass}) => {
    return (
        <div className={positionClass}>
            <div className="card__img">
                <img src={project1} alt="project-demo" />
            </div>
            <div className="card__text">
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default Card