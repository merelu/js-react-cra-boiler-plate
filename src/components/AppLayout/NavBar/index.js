import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink, NavLogo } from "./styles";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <NavLink to="/">
          <NavLogo src="/images/logo.png" alt="logo" />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
