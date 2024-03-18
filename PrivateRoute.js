import { Navigate } from "react-router-dom";
import AdminPanel from "./Components/Pages/Admin Panel/AdminPanel";
import { useEffect, useState } from "react";



const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
    const User = localStorage.getItem("user");
    if (User) {
      const foundUser = JSON.parse(User);
      console.log(foundUser)
      setIsAuthenticated(foundUser);
    }
  }, [window.onload]);

 // Your authentication logic goes here...
 
  return isAuthenticated.isAdmin ?<AdminPanel/>:<Navigate to={"/login"} />
};
export default PrivateRoute;