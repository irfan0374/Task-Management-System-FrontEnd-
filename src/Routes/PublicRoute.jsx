import { Navigate } from "react-router-dom";

const UserPublic = ({ children }) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            return <Navigate to="/taskDetails" />;  // Redirect logged-in users to a specific page
        } else {
            return children;
        }
    } catch (error) {
        console.log(error.message);
        return children;  // Fallback in case of error
    }
};

export default UserPublic;
