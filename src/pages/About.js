import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ScrollToTop from '../utils/ScrollToTop';
import ContentSectionText from '../components/ContentSectionText/ContentSectionText';
import ContentSectionEducation from '../components/ContentSectionInfo/ContentSectionInfo';
import ContentSectionSkills from '../components/ContentSectionSkills/ContentSectionSkills';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import ContentSectionAbout from '../components/ContentSectionAbout/ContentSectionAbout';
import ContentSectionContact from '../components/ContentSectionContact/ContentSectionContact';
import ContentSectionSocial from '../components/ContentSectionSocial/ContentSectionSocial';
const About = () => {
  
  return (
    <>
      <AnimatedPage>
        <ScrollToTop/>
        <Hero heroType={'About'}/>
        <ContentSectionAbout/>
        {/* <ContentSectionText contentType={''} bgColorClass={'content-section--white'} insertClass={'content-section'}/> */}
        
        <ContentSectionSkills type={'about'}/>
        {/* <ContentSectionEducation/> */}
        
        <ContentSectionContact/>
        <ContentSectionSocial/>
        <Footer/>
      </AnimatedPage>  
    </>
  )
}

export default About