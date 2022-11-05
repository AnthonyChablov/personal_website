import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import DocumentDisplay from "../components/DocumentDisplay/DocumentDisplay";
import pdfFile from "../../src/assets/pdf/Resume.pdf"
import ScrollToTop from '../utils/ScrollToTop';
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
const Skills = () => {
    return (
        <>
            <ScrollToTop/>
            <AnimatedPage>
                <Header title="My Resume"/>
                <DocumentDisplay className="pdfReader"  url={pdfFile}/>
                <Footer/>
            </AnimatedPage>
        </>
    )
}

export default Skills