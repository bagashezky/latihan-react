import React, { useState } from "react";
import logosimawas from "../Assets/logosimawas.png";
// import { HomeIcon } from "@mui/icons-material";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import {
//   Box,
//   Drawer,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//   ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logosimawas} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Beranda</a>
        <a href="#">Dashboard</a>
        <a href="#">Dataset</a>
        <a href="#">Ketahanan Pangan</a>
        <a href="#">Peternakan</a>
      </div>
    </nav>
  );
}