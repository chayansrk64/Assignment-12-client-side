 
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructors";
 
 
const InstructorRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    const [isInstructor, isInstructorLoading] = useInstructor()

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;

