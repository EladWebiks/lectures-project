import React from 'react'
import { MyProvider, useMyContext } from "../../Context"; // Adjust the import path as necessary
import "./Navbar.css"
import ResponsiveAppBar from './miniNavbar';
function Navbar() {
  return (
    <ResponsiveAppBar></ResponsiveAppBar>
  )
}

export default Navbar
