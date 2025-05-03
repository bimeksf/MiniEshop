import { Link, Navigate, Outlet,useLocation    } from "react-router-dom";
export default function Auth () {
    const isLoggedIn = localStorage.getItem("loggedin") === "true"
    const location = useLocation()

    if(!isLoggedIn)
       return  <Navigate to="/login"  state={{from: location, message:"you must log in"}} replace/>;

    return <Outlet/>

}