import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Grid, Typography, Drawer, List, ListItem, ListItemText, Collapse, IconButton, ListItemIcon, Divider, Link } from "@mui/material";
import { ExpandLess, ExpandMore, Close, Menu as MenuIcon } from "@mui/icons-material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import MicIcon from "@mui/icons-material/Mic";
import { Link as RouterLink } from 'react-router-dom';


// Assets images imports
import logo from "../../assets/logo.png";
import mobiles from "../../assets/mobiles.svg";
import earbuds from "../../assets/wireless-earbuds.svg";
import watches from "../../assets/smart-watches.svg";
import trimmers from "../../assets/trimmers-shaver.svg";
import powerbanks from "../../assets/power-banks.svg";
import chargers from "../../assets/mobile-chargers.svg";
import speakers from "../../assets/bluetooth-speakers.svg";
import tablets from "../../assets/tablets.svg";

// Category Data
const categories = [
  { name: "Mobiles", image: mobiles },
  { name: "Wireless Earbuds", image: earbuds },
  { name: "Smart Watches", image: watches },
  { name: "Trimmers Shaver", image: trimmers },
  { name: "Power Banks", image: powerbanks },
  { name: "Wall Chargers", image: chargers },
  { name: "Bluetooth Speakers", image: speakers },
  { name: "Tablets", image: tablets },
];

// Popular Lists Component
const popularLists = [
  { name: 'Best Smart Watches' },
  { name: 'Best Smart Watches under 5000' },
  { name: 'Best Smart Watches for Women' },
  { name: 'Best Watches Under 8000' },
  { name: 'Best Watches Under 13000' },

];

const drawerCategories = [
  {
    name: "Mobiles",
    icon: <PhoneIphoneIcon />,
    subcategories: ["Apple", "Samsung", "Xiaomi", "Infinix", "Oppo", "Vivo", "Realme"],
  },
  {
    name: "Smart Watches",
    icon: <WatchIcon />,
    subcategories: ["Apple Watch", "Samsung Watch", "Xiaomi Mi Band", "Faster", "Yolo"],
  },
  {
    name: "Wireless Earbuds",
    icon: <HeadphonesIcon />,
    subcategories: ["AirPods", "Galaxy Buds", "Redmi Buds"],
  },
  {
    name: "Power Banks",
    icon: <BatteryChargingFullIcon />,
    subcategories: ["Anker", "Xiaomi", "Baseus"],
  },
];

const MainNavigation = () => {
  return (
    <Box className="sb-nav-box sb-row" sx={{ padding: 0 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          marginLeft: 2,
          fontFamily: 'Arial, sans-serif',
          color: 'gray',
        }}
      >
        MAIN NAVIGATION
      </Typography>
      <List sx={{ padding: 0 }}>
        <ListItem>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem>
          <ListItemText primary="FAQs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Terms & Conditions" />
        </ListItem>
      </List>
    </Box>
  );
};


const NavigationLinks = () => {
  const links = [
    {
      href: "https://priceoye.pk/login",
      icon: <LocationOnOutlinedIcon sx={{ fontSize: 22, marginRight: 1, color: "white" }} />,
      label: "Track My Order",
    },
    {
      href: "https://priceoye.pk/login",
      icon: <DvrOutlinedIcon sx={{ fontSize: 22, marginRight: 1, color: "white" }} />,
      label: "Launch a Complaint",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
            fontSize: "0.9rem",
          }}
        >
          {link.icon}
          <Typography variant="body2">{link.label}</Typography>
        </Link>
      ))}
    </Box>
  );
};


export default function CustomAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#4da6ff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side menu and logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" style={{ width: "250px", maxWidth: "120px" }} />
          </Box>

          {/* Search Input and Mic Icon */}
          <Box sx={{ flexGrow: 1, position: 'relative', maxWidth: '500px', width: '100%' }}>
            <input
              type="text"
              placeholder="Search.."
              style={{
                width: '100%',
                padding: '8px 40px 8px 10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '1rem',
              }}
            />
            <MicIcon
              sx={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgb(72,175,255)',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box>
            <Button
              component={RouterLink}
              to="/login"
              variant="outlined"
              sx={{
                color: "#4da6ff",
                backgroundColor: "white",
                borderColor: "white",
                ml: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                },
              }}
            >
              Log in
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              sx={{
                color: "white",
                backgroundColor: "transparent",
                borderColor: "white",
                ml: 1,
                "&:hover": {
                  backgroundColor: "white",
                  color: "#4da6ff",
                  borderColor: "white",
                },
              }}
            >
              Register
            </Button>

          </Box>
        </Toolbar>
      </AppBar>

      {/* Lower Category Section */}
      <Box sx={{ mt: 2, mb: 4, px: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={1.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: { xs: "50px", sm: "60px", md: "70px" },
                  height: { xs: "50px", sm: "60px", md: "70px" },
                  objectFit: "contain",
                  mb: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
              >
                {category.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ sx: { width: 350 } }}
      >
        {/* Header */}
        <div style={{ alignItems: "center", padding: "16px", background: "#4da6ff", flexWrap: "nowrape" }}>
          <img src={logo} alt="Logo" style={{ width: "250px", maxWidth: "120px" }} />
          <IconButton onClick={() => toggleDrawer(false)}>
            <Close />
          </IconButton>


          {/* Login */}
          <Box style={{ padding: "8px 16px" }}>
            <Button variant="outlined" style={{
              background: "white", marginTop: "4", "&:hover": {
                backgroundColor: "transparent",
                color: "#4da6ff",
                fontSize: "bold",
                borderColor: "white",

              }
            }}>
              Login
            </Button>
            <NavigationLinks />
          </Box>
        </div>
        {/* Categories */}
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", padding: "8px 16px", backgroundColor: "#f0f5ff" }}
        >
          CATEGORIES
        </Typography>
        <List>
          {drawerCategories.map((category, index) => (
            <div key={category.name}>
              <ListItem button onClick={() => handleCategoryClick(category.name)}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
                {expandedCategory === category.name ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              {/* Divider below "headings" */}
              {category.name === "Mobiles" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Smart Watches" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Wireless Earbuds" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Power Banks" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}

              <Collapse in={expandedCategory === category.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.subcategories.map((subcategory) => (
                    <ListItem key={subcategory} sx={{ pl: 4 }}>
                      <ListItemText primary={subcategory} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>

        {/* Popular Lists Section */}
        <Typography variant="subtitle1" sx={{ padding: '8px 16px', backgroundColor: '#f0f5ff', fontWeight: 'bold' }}>
          POPULAR LISTS
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 16px' }}>
          {popularLists.map((item, index) => (
            <a key={index} href={item.link} style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: 'rgb(72,175,255)',
                  borderColor: 'rgb(72,175,255)',
                  '&:hover': {
                    backgroundColor: 'rgb(72,175,255)',
                    color: 'white',
                    borderColor: 'rgb(72,175,255)'
                  },
                  padding: '8px 12px'
                }}
              >
                {item.name}
              </Button>
            </a>
          ))}
        </Box>

        {/* Main Navigation */}
        <MainNavigation />

      </Drawer>
    </Box>
  );
}
