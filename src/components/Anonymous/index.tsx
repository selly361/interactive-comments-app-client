import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "hooks/useAuthContext";

const Anonymous = () => {
    const { isAuthenticated } = useAuthContext()
    
    return (isAuthenticated ? <Navigate to="/" replace/> : <Outlet /> )
}
export default Anonymous;