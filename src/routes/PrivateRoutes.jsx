import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({children}) => {
    const {user,loading}=UseAuth()
    const location=useLocation()

    if(loading) {
        return (
            < div className="flex justify-center items-center h-screen" >
                <span className="loading loading-spinner loading-lg"></span>
            </div >

        )
    }
    if(user) return children

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoutes;