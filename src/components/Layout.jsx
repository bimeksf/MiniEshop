import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import React from "react";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const location = useLocation()

  const noPaddingRoutes = ["/products","/","/login"]
  const addPadding = !noPaddingRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main className={addPadding ? "pt-16" : ""}>
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
