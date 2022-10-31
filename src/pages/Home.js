import { motion, useScroll , useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../utils/ScrollToTop';
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div className='single'
      
      initial='initial'
      animate='animate'
      exit='exit'
    >
        <ScrollToTop/>
        <Hero heroType={'Homepage'}/>
        <ContentLayout/>
        <Footer/>
    </motion.div>
    
  )
}

export default Home