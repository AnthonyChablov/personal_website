import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ContentSectionText from '../components/ContentSectionText/ContentSectionText';
import ContentSectionEducation from '../components/ContentSectionEducation/ContentSectionEducation';
const About = () => {
  return (
    <>
        
        <Hero heroType={'About'}/>
        <ContentSectionText contentType={'aboutText'} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionEducation/>
        <Footer/>
    </>
  )
}

export default About