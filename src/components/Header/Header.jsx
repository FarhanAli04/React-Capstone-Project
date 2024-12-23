import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCircleUser,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { Button, Divider, Menu, Paper, Typography } from "@mui/material";
import AppMenu from "./AppMenu";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const userData = localStorage?.getItem("user");
  const storedUser = JSON.parse(userData);

  useEffect(() => {


    if (storedUser) {

      setIsLoggedIn(true)

    }
    if (storedUser && storedUser.fullName) {
      setUserName(storedUser.fullName);
    }
  }, []);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className="mt-10 p-10"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Link to={'account'}>My account</Link></MenuItem>
      <Divider />
      <MenuItem className="text-xs !important">Track my order</MenuItem>
      <Divider />
      <MenuItem className="text-xs">Launch a complaint</MenuItem>
      <Divider />
      <MenuItem className="text-xs">Notifications</MenuItem>
      <Divider />
      <MenuItem
        className="text-xs"
        onClick={() => {
          localStorage.removeItem("user");
          setIsLoggedIn(false);
          navigate("/");
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon icon={faEnvelope} />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onMouseOver={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon icon={faCircleUser} />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="py-2"
          sx={{ backgroundColor: "#48afff" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <FontAwesomeIcon icon={faBars} onClick={toggleDrawer(true)} />
            </IconButton>
            <Link to={""}>
              <img
                className="w-32 md:w-36"
                src="https://static.priceoye.pk/images/logo.svg"
                alt=""
              />
            </Link>
            <Box className="flex justify-center items-center h-full w-full">
              <Paper
                component="form"
                className="flex justify-center items-center ml-2"
              >
                <InputBase
                  className="md:w-96 px-4"
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <FontAwesomeIcon
                    className="text-[#48afff]"
                    icon={faMicrophone}
                  />
                </IconButton>
              </Paper>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="flex items-center"
            >
              {!isLoggedIn ? (<Box className="flex gap-2">
                <Button
                  className="w-28 h-10"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "white",
                    color: "#48afff",
                    border: "1px solid #48afff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid white",
                    },
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  <Link to={"sign-in"}>Log in</Link>
                </Button>
                <Button
                  className="w-28 h-10"
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    "&:hover": { backgroundColor: "white", color: "#48afff" },
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  <Link to={"sign-up"}>Register</Link>
                </Button>
              </Box>

              ) : (isLoggedIn && (
                <Box className='flex items-center gap-2'>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onMouseOver={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faCircleUser} />
                  </IconButton>

                  {userName && <Typography className="w-20">{userName}</Typography>}

                </Box>))}
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <AppMenu open={open} toggleDrawer={toggleDrawer} onClose={() => toggleDrawer(false)} />
      </Box>
    </>
  );
};

export default Header;