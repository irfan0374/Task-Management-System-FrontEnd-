import { Navigate } from "react-router-dom";

const UserProtect = ({ children }) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            return children;
        } else {
            return <Navigate to="/" />;
        }
    } catch (error) {
        console.log(error.message);
        return <Navigate to="/" />;  // Fallback in case of error
    }
};

export default UserProtect;
