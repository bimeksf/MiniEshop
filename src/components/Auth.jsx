import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
useState
export default function Auth () {

    const isLoggedIn = localStorage.getItem("isLoggedIn")


    if(!isLoggedIn)
        <Link to="/login"  state={{message:"you must log in"}} replace/>;

    return <Outlet/>

}