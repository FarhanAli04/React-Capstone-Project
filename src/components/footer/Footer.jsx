import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";
import Img1 from "../../assets/payment_method.svg";
import Img2 from "../../assets/badge_web_generic.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <Box style={{ backgroundColor: "#4dacf5" }} className="mt-5">
        <Box className="container mx-auto">
          <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-white cursor-pointer py-12 ms-5">
            {/* About Us Section */}
            <Box>
              <img className="w-1/3 my-3" src={logo} alt="Logo" />
              <ul>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Press & Blog</li>
                <li>Terms & Condition</li>
              </ul>
            </Box>
            {/* Customer Service Section */}
            <Box>
              <Typography variant="h6" className="my-5 text-white">
                Customer Service
              </Typography>
              <ul>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Instalment plan</li>
                <li>E-Warranty Activation</li>
                <li>Sell On Priceoye</li>
              </ul>
            </Box>
            {/* Secure Payments Section */}
            <Box className="w-2/3">
              <Typography variant="h6" className="my-5 text-white">
                Secure Payments Methods
              </Typography>
              <Box className="w-2/3 my-2">
                <img src={Img1} alt="Payment Methods" />
              </Box>
              <Box className="w-1/2 my-2">
                <img src={Img2} alt="Badge" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Section */}
      <Box style={{ backgroundColor: "#4dacf5" }}>
        <Box className="container mx-auto py-3">
          <Box className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-white cursor-pointer">
            {/* Copyright Section */}
            <Box>
              <Typography variant="body2" className="text-white text-sm">
                Copyright © 2024 Priceoye.pk
              </Typography>
            </Box>
            {/* Social Media Icons */}
            <Box className="flex justify-center space-x-4">
              <Icon
                icon="entypo-social:youtube-with-circle"
                className="w-8 h-8 text-white"
              />
              <Icon icon="mdi:facebook" className="w-8 h-8 text-white" />
              <Icon
                icon="entypo-social:instagram-with-circle"
                className="w-8 h-8 text-white"
              />
              <Icon icon="mage:tiktok-circle" className="w-8 h-8 text-white" />
              <Icon
                icon="entypo-social:linkedin-with-circle"
                className="w-8 h-8 text-white"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
