import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../auth';

const PrivateRoutes=()=>{

    
return isLoggedIn() ? <Outlet/>: <Navigate to={"/login"}/> 
} 
export default PrivateRoutes;