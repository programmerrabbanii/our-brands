import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouters = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>

    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouters;