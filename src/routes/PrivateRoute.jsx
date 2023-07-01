import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    if(loading){
        return <div className="w-full h-[90vh] flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
    else{
        <Navigate to='/login'></Navigate>
    }
    
};

export default PrivateRoute;