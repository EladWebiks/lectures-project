import React, { MouseEvent, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GoldIcon from "../../assets/GoldIcon.png"
import IconWhite from "../../assets/WhiteIcon.png"
import { useMyContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function ResponsiveAppBar() {
  const { Links } = useMyContext();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (value: string) => {
    setAnchorElNav(null);
    navigate(value);
  };

  // Listen to scroll event
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "primary.main" : "transparent",
        boxShadow: scrolled ? 3 : 0,
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left Section: Menu Icon for Small Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {Object.entries(Links).map(([key, value]) => (
                <MenuItem key={key} onClick={() => handleCloseNavMenu(value)}>
                  <Typography sx={{ textAlign: "center" }}>{key}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center Section: AdbIcon AD*/}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <img src={IconWhite } className= {!scrolled ? "icon-color-dark": ""} style={{height:"3rem"}} alt="" />
          </Box>

          {/* Right Section: Buttons for Large Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {Object.entries(Links).map(([key, value]) => (
              <Button
                key={key}
                onClick={() => handleCloseNavMenu(value)}
                sx={{ my: 2, color: `${scrolled ? "text.primary":"text.secondary"}`, display: "block" }}
              >
                {key}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
