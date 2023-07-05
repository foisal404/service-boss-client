import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    const location = useLocation();
    if(loading){
        return <div className="w-full h-[90vh] flex justify-center items-center"> <progress className="progress w-56"></progress></div>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    
};

export default PrivateRoute;