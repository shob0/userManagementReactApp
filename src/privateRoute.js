import { Navigate } from 'react-router-dom';
import authService from './service/auth.service';


export default function PrivateRoute({children}) {
    return (authService.isAuthenticated()) ?  children : <Navigate to='/'/>
}