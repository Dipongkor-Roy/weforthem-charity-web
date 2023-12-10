import { Navigate, useLocation } from "react-router-dom";
import UseContext, { AuthContext } from "../Contexts/UseContext";

const PrivateRoutes = ({children}) => {
    const location=useLocation();
    const{user,loading}=UseContext(AuthContext);
    if(lodaing){
        return(
        <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
        );
    }
    if(!user){
        return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;