import React from "react";
import NavBar from "./NavBar";

function AppLayout({ children, nav = false }) {
  return (
    <>
      {nav && <NavBar />}
      {children}
    </>
  );
}

export default AppLayout;
