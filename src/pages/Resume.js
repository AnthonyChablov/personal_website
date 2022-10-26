import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import DocumentDisplay from "../components/DocumentDisplay/DocumentDisplay";
import pdfFile from "../../src/assets/pdf/Resume.pdf"
const Skills = () => {
    return (
        <>
            <Header title="My Resume"/>
            <DocumentDisplay className="pdfReader"  url={pdfFile}/>
            <Footer/>
        </>
    )
}

export default Skills