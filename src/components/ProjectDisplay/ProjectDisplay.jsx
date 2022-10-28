import Project from "../Project/Project";
const ProjectDisplay = () => {
    return (
        <div className="project-display">
            <div className="project-display__wrapper container">
                <Project id='' img='project1' title='⁂ Password Generator Application' description=' A Password Generator Web Application from Front-End-Mentor.com. Created using React, SCSS, React Toastify and MUI.' btn1='Visit Site' btn2='View Code'/>
                <Project img='' title='⁂ IP Address Tracker' description=' An IP Address Tracker web application from Front-End-Mentor.com. Created using React, SCSS, React Leaflet , The Geolocation DB API and The Map Tiler API.' btn1='Visit Site' btn2='View Code'/>
                <Project img='' title='⁂ React Weather App' description='A Weather Application that displays the weather of the entered location. Created using React, SCSS and The Open-Weather API ' btn1='Visit Site' btn2='View Code'/>
                <Project img='' title='⁂ Clock App' description='A Clock Application that displays the time of the entered location. Created using React and SCSS' btn1='Visit Site' btn2='View Code'/>
            </div>
        </div>
    )
}

export default ProjectDisplay