import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Resume from '../../pages/Resume';

import {
    Routes,
    Route, 
    useLocation,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Error404 from "../../pages/Error404";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
            <AnimatePresence mode='wait'>
                <Routes key={location.pathname} location={location}>
                    <Route 
                        path='/' 
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
                        path='/resume' 
                        element={
                            <Resume/>
                        }
                    />
                    <Route 
                        path='/*' 
                        element={
                            <Error404/>
                        }
                    />
                </Routes>
                
            </AnimatePresence>
    )
}
export default AnimatedRoutes;

