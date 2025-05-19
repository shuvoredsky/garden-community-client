import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // Or a spinner
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivetRoute;
