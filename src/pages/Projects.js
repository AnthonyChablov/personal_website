import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import ScrollToTop from '../utils/ScrollToTop';
const Projects = () => {
  return (
    <>
      <ScrollToTop/>
      <AnimatedPage>
          <Header title="My Projects"/>
          <ProjectDisplay/>
          <Footer/>
      </AnimatedPage>
    </>
  )
}

export default Projects