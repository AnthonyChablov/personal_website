import Card from "../Card/Card";
import Cursor from "../Cursor/Cursor";
const ContentSectionProjects = () => {
    return (
        <div className="content-section-projects ">
             
            <div className="content-section-projects__wrapper container">
                <h2 className="content-section-projects__title">My Projects.</h2>
                <div className="content-section-projects__project ">
                    <Card 
                        positionClass={'card card-left'} 
                        img={123} text={'⁂ Password Generator Application'} 
                        projectLink={'https://anthonychablov.github.io/password-generator-app/'} 
                        codeLink={'https://github.com/AnthonyChablov/password-generator-app'}
                    />
                    <Card positionClass={'card card-right'} img={123} text={'⁂ IP Address Tracker'}/>
                </div>
                {/* 1000 x 667 */}
                <div className="content-section-projects__project">
                    <Card positionClass={'card card-left'} img={123} text={'⁂ Weather Application'}/>
                    <Card positionClass={'card card-right'} img={123} text={'⁂ Clock Application'}/>
                </div>
            </div>
        </div>
    )
}

export default ContentSectionProjects;


