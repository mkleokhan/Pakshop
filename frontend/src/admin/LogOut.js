import { useEffect, Link } from "react";
import { Navigate} from 'react-router-dom';
import { useAuth } from "../store/auth";
function LogOut(){

    const {logOutUser}  = useAuth();
    
    useEffect(()=>{

        logOutUser()
        

    }, [logOutUser])

    return <Navigate to ="/admin/SignIn"/>
    
}


export default LogOut;