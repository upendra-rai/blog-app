import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Signup from './pages/Signup';
import UserDashboard from './pages/user-routes/UserDashboard';
import PrivateRoutes from './components/PrivateRoutes';
import ProfileInfo from './pages/user-routes/ProfileInfo';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="bottom-center"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/user" element={<PrivateRoutes/>} >
        <Route path="dashboard" element={<UserDashboard/>} />
        <Route path="profile-info" element={<ProfileInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
