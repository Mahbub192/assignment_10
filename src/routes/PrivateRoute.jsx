/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { userProfile, loader } = useContext(AuthContext);
  console.log("loading", loader);
  const location = useLocation();
  if (loader) {
    return (
      <div className="h-[calc(100vh-50px)] container mx-auto text-center mt-72">
        <progress className="progress w-96"></progress>
        <p className=" text-4xl">
          Loading.........
        </p>
      </div>
    );
  }

  if (userProfile) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
