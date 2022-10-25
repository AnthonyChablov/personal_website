import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ContentSectionText from '../components/ContentSectionText/ContentSectionText';
const About = () => {
  return (
    <>
        
        <Hero heroType={'About'}/>
        <ContentSectionText contentType={'aboutText'} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionText contentType={'aboutText'} bgColorClass={'content-section--grey'} insertClass={'content-section'}/>
        <Footer/>
    </>
  )
}

export default About