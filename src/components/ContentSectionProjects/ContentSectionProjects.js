import Card from "../Card/Card";
const ContentSectionProjects = () => {
    return (
        <div className="content-section-projects ">
            <div className="content-section-projects__wrapper container">
                <div className="content-section-projects__project ">
                    <Card positionClass={'card card-left'} img={123} text={'Project 1'}/>
                    <Card positionClass={'card card-right'} img={123} text={'text'}/>
                </div>
                <div className="content-section-projects__project">
                    <Card positionClass={'card card-left'} img={123} text={'text'}/>
                    <Card positionClass={'card card-right'} img={123} text={'text'}/>
                </div>
                <div className="content-section-projects__project">
                    <Card positionClass={'card card-left'} img={123} text={'text'}/>
                    <Card positionClass={'card card-right'} img={123} text={'text'}/>
                </div>
            </div>
        </div>
    )
}

export default ContentSectionProjects;


