import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from "react";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-2">
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default Layout