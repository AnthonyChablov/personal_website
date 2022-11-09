import './App.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'; 
import NavBar from './components/Navbar/Navbar';
import { ToastContainer, Flip } from 'react-toastify';
function App() {
    
    return (
        <Router>            
            <NavBar/>
            <ToastContainer 
                className="toaster-container"
                position="bottom-center"
                autoClose={4200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            <AnimatedRoutes/>
        </Router>
    );
}

export default App;
