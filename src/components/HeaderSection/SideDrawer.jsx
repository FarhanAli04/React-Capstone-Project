import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Close } from "@mui/icons-material";

// Category data
const categories = [
  {
    name: "Mobiles",
    subcategories: ["Apple", "Samsung", "Xiaomi", "Infinix", "Oppo", "Vivo", "Realme"],
  },
  {
    name: "Smart Watches",
    subcategories: ["Apple Watch", "Samsung Watch", "Xiaomi Mi Band"],
  },
  {
    name: "Wireless Earbuds",
    subcategories: ["AirPods", "Galaxy Buds", "Redmi Buds"],
  },
  {
    name: "Power Banks",
    subcategories: ["Anker", "Xiaomi", "Baseus"],
  },
];

const SideDrawer = ({ open, onClose }) => {
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
        sx: { width: 350 }, // Increased width here
      }}
    >
      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
        <Typography variant="h6" color="primary">
          PriceOye
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </div>

      {/* Login Button */}
      <div style={{ padding: "8px 16px" }}>
        <Button variant="outlined" fullWidth>
          Login
        </Button>
      </div>

      {/* Links */}
      <List>
        <ListItem>
          <ListItemText primary="Track my Order" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Launch a Complaint" />
        </ListItem>
      </List>

      {/* Categories */}
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "8px 16px", backgroundColor: "#f0f5ff" }}
      >
        CATEGORIES
      </Typography>
      <List>
        {categories.map((category) => (
          <div key={category.name}>
            <ListItem button onClick={() => handleCategoryClick(category.name)}>
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
    </Drawer>
  );
};

export default SideDrawer;
