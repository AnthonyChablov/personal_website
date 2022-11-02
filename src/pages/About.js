import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ScrollToTop from '../utils/ScrollToTop';
import ContentSectionText from '../components/ContentSectionText/ContentSectionText';
import ContentSectionEducation from '../components/ContentSectionEducation/ContentSectionEducation';
import ContentSectionSkills from '../components/ContentSectionSkills/ContentSectionSkills';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
const About = () => {
  return (
    <>
      <AnimatedPage>
        <ScrollToTop/>
        <Hero heroType={'About'}/>
        <ContentSectionText contentType={''} bgColorClass={'content-section--white'} insertClass={'content-section'}/>
        <ContentSectionEducation/>
        <ContentSectionSkills/>
        <Footer/>
      </AnimatedPage>  
    </>
  )
}

export default About