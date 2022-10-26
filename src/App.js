import './App.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import Cursor from './components/Cursor/Cursor'; 
import NavBar from './components/Navbar/Navbar';

function App() {
    return (
        <Router>
            <Cursor/>   
            <NavBar/>
            <AnimatedRoutes/>
            
        </Router>
    );
}

export default App;
