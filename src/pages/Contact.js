import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../utils/ScrollToTop';
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
const Contact = () => {
  return (
    <AnimatedPage>
        <ScrollToTop/>
        <Header title="Let's Collaborate"/>
        <Form/>
        <Footer/>
    </AnimatedPage>
  )
}

export default Contact