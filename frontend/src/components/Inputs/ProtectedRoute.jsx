import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

