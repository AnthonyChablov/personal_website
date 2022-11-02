import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
const Projects = () => {
  return (
    <AnimatedPage>
        <Header title="My Projects"/>
        <ProjectDisplay/>
        <Footer/>
    </AnimatedPage>
  )
}

export default Projects