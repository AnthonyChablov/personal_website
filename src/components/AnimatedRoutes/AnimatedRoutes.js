import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Skills from '../../pages/Skills';
import Intro from '../../pages/Intro';
import {
    Routes,
    Route, 
    useLocation
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
const AnimatedRoutes = () => {
    const location = useLocation();
    const imageDetails = {
        width : 600, 
        height : 300,
    }
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes>
                <Route 
                    path='/' 
                    element={
                        <Intro/>
                    }
                />
                <Route 
                    path='/home' 
                    element={
                        <Home/>
                    }
                />
                <Route 
                    path='/about' 
                    element={
                        <About/>
                    }
                />
                <Route 
                    path='/contact' 
                    element={
                        <Contact/>
                    }
                />
                <Route 
                    path='/projects' 
                    element={
                        <Projects/>
                    }
                />
                <Route 
                    path='/skills' 
                    element={
                        <Skills/>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes