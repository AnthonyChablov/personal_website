import './App.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import Cursor from './components/Cursor/Cursor'; 
import NavBar from './components/Navbar/Navbar';
import ScrollToTop from './utils/ScrollToTop';

function App({url}) {
    return (
        <Router>            
            <ScrollToTop/>
            <NavBar/>
            <AnimatedRoutes/>
        </Router>
    );
}

export default App;
