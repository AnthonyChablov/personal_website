import Project from "../Project/Project";
const ProjectDisplay = () => {
    return (
        <div className="project-display">
            <div className="project-display__wrapper container">
                <Project id='project-1' img='project1' title='⁂ Password Generator Application' description=' A Password Generator Web Application from Front-End-Mentor.com. Created using React, SCSS, React Toastify and MUI.' btn1='Visit Site' btn2='View Code' siteLink='https://anthonychablov.github.io/password-generator-app/' codeLink='https://github.com/AnthonyChablov/password-generator-app'/>
                <Project id='project-2' img='' title='⁂ IP Address Tracker' description=' An IP Address Tracker web application from Front-End-Mentor.com. Created using React, SCSS, React Leaflet , The Geolocation DB API and The Map Tiler API.' btn1='Visit Site' btn2='View Code'
                siteLink='https://anthonychablov.github.io/ip-address-tracker/' 
                codeLink='https://github.com/AnthonyChablov/ip-address-tracker'/>
                <Project id='project-3' img='' title='⁂ React Weather App' description='A Weather Application that displays the weather of the entered location. Created using React, SCSS and The Open-Weather API ' btn1='Visit Site' btn2='View Code'
                siteLink='https://anthonychablov.github.io/react-weather-app/' 
                codeLink='https://github.com/AnthonyChablov/react-weather-app'/>
                <Project id='project-4' img='' title='⁂ Clock App' description='A Clock Application that displays the time of the entered location. Created using React and SCSS' btn1='Visit Site' btn2='View Code'
                siteLink='https://anthonychablov.github.io/react-weather-app/' 
                codeLink='https://github.com/AnthonyChablov/react-weather-app'/>
            </div>
        </div>
    )
}

export default ProjectDisplay