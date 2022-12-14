import ScrollToTop from "../utils/ScrollToTop"
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
const Error404 = () => {
  return (
    <>
      <ScrollToTop/>
      <AnimatedPage>
          <NotFound/>
          <Footer/>
      </AnimatedPage>
      
    </>
  )
}

export default Error404