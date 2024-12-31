import React, { useState } from "react";
import {
  Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, IconButton, Button, Typography, Divider,
} from "@mui/material";
import {
  ExpandLess, ExpandMore, Close, AccountCircle, LocalShipping, ErrorOutline, Notifications, Logout, Smartphone,
  Watch, Headset, Air, Brush, Power, Speaker,
} from "@mui/icons-material";
import logo from '../../assets/logo.svg'

const categories = [
  {
    name: "Mobiles",
    icon: <Smartphone />,
    subcategories: ["Apple", "Samsung", "Xiaomi", "Infinix", "Oppo", "Vivo", "Realme"],
  },
  {
    name: "Smart Watches",
    icon: <Watch />,
    subcategories: ["Apple Watch", "Samsung Watch", "Xiaomi Mi Band"],
  },
  {
    name: "Wireless Earbuds",
    icon: <Headset />,
    subcategories: ["AirPods", "Galaxy Buds", "Redmi Buds"],
  },
  {
    name: "Air Purifiers",
    icon: <Air />,
    subcategories: ["Philips", "Mi Air Purifier", "Dyson"],
  },
  {
    name: "Personal Cares",
    icon: <Brush />,
    subcategories: ["Trimmers", "Hair Dryers", "Shavers"],
  },
  {
    name: "Mobiles Accessories",
    icon: <Power />,
    subcategories: ["Chargers", "Cables", "Phone Covers"],
  },
  {
    name: "Bluetooth Speakers",
    icon: <Speaker />,
    subcategories: ["JBL", "Sony", "Bose"],
  },
];

const popularLists = [
  "Best Mobiles Under 10000",
  "Best Mobiles Under 15000",
  "Best Mobiles Under 20000",
  "Best Mobiles Under 30000",
  "Best Mobiles Under 40000",
  "Best Mobiles Under 50000",
  "Best Mobiles Under 60000",
  "Best Mobiles Under 80000",
  "Best Mobiles Under 100000",
  "Best 5G Phones",
  "Best Camera Phones",
  "Best Selfie Camera Phones",
  "Best PUBG Mobiles",
  "Most Expensive Phones",
  "Top 10 Fast Charging Mobiles",
];

const additionalLinks = [
  "About",
  "FAQs",
  "Careers",
  "Contact",
  "Privacy Policy",
  "Press & Blog",
  "Installments Plan",
  "Terms & Condition",
  "Warranty Center",
];

const Sidebar = ({ open, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 350, backgroundColor: "#f7f7f7", padding: "16px 0" },
      }}
      BackdropProps={{
        onClick: onClose,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#4dacf5",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginLeft: "16px" }}
        />
        <IconButton
          onClick={onClose}
          style={{ color: "black", borderRadius: "50%" }}
        >
          <Close />
        </IconButton>
      </div>

      <List
        style={{
          backgroundColor: "#4dacf5",
          color: "#fff",
          padding: "0 16px",
        }}
      >

        <ListItem button component="a" href="/my-account">
          <ListItemIcon style={{ color: "#fff" }}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: "#fff" }}>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="Track my Order" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: "#fff" }}>
            <ErrorOutline />
          </ListItemIcon>
          <ListItemText primary="Launch a Complaint" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: "#fff" }}>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: "#fff" }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      {/* Categories Section */}
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: "bold",
          padding: "8px 16px",
          backgroundColor: "#f0f5ff",
        }}
      >
        CATEGORIES
      </Typography>
      <List>
        {categories.map((category) => (
          <div key={category.name}>
            <ListItem button onClick={() => handleCategoryClick(category.name)}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
              {expandedCategory === category.name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
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

      <Divider />

      {/* Popular Lists Section */}
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: "bold",
          padding: "8px 16px",
          backgroundColor: "#f0f5ff",
        }}
      >
        POPULAR LISTS
      </Typography>
      <div style={{ padding: "8px 16px" }}>
        {popularLists.map((item) => (
          <Button
            key={item}
            variant="outlined"
            fullWidth
            style={{ marginBottom: "8px", textTransform: "none" }}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* Additional Links */}
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: "bold",
          padding: "8px 16px",
          marginTop: "16px",
        }}
      >
        MAIN NAVIGATION
      </Typography>
      <List>
        {additionalLinks.map((link) => (
          <ListItem key={link}>
            <ListItemText primary={link} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
