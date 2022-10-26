import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ContentSectionText from '../components/ContentSectionText/ContentSectionText';
import ContentSectionEducation from '../components/ContentSectionEducation/ContentSectionEducation';
import ContentSectionSkills from '../components/ContentSectionSkills/ContentSectionSkills';
const About = () => {
  return (
    <>
        <Hero heroType={'About'}/>
        <ContentSectionText contentType={'aboutText'} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionEducation/>
        <ContentSectionSkills/>
        <Footer/>
    </>
  )
}

export default About