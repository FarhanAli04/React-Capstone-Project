import {
  faCommentDots,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AccountManagement = () => {
  return (
    <>
      {/* Top boxes */}
      <Box className="md:flex md:items-center">
        <Box className=" bg-white md:w-1/2 m-5 p-7">
          <Typography sx={{ fontSize: "18px", paddingBottom: "25px" }}>
            My orders
          </Typography>
          <Box className="flex items-center justify-between flex-wrap gap-10 md:gap-14 lg:gap-5">
            {/* 1 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/pay-icon.svg"
                alt=""
              />
              <Typography>Pay</Typography>
            </Box>

            {/* 2 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/recieve-icon.svg"
                alt=""
              />
              <Typography>Receive</Typography>
            </Box>

            {/* 3 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/review-icon.svg"
                alt=""
              />
              <Typography>Review</Typography>
            </Box>

            {/* 4 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/refund-icon.svg"
                alt=""
              />
              <Typography>Refund</Typography>
            </Box>

            {/* 5 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/complaints-icon.svg"
                alt=""
              />
              <Typography>Complaints</Typography>
            </Box>

            {/* 6 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/e-warranty-icon.svg"
                alt=""
              />
              <Typography>Addons</Typography>
            </Box>
          </Box>
        </Box>

        <Box className=" bg-white md:w-1/2 m-5 p-7">
          <Typography sx={{ fontSize: "18px", paddingBottom: "25px" }}>
            Help
          </Typography>
          <Box className="flex items-center lg:justify-between justify-start flex-wrap gap-10 md:gap-14 lg:gap-5">
            {/* 1 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/faqs-icon.svg"
                alt=""
              />
              <Typography>FAQs</Typography>
            </Box>

            {/* 2 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/open-parcel-icon.svg"
                alt=""
              />
              <Typography>Open Parcel</Typography>
            </Box>

            {/* 3 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/contact-icon.svg"
                alt=""
              />
              <Typography>Contact</Typography>
            </Box>

            {/* 4 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/location-icon.svg"
                alt=""
              />
              <Typography>Locations</Typography>
            </Box>

            {/* 5 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/emi-icon.svg"
                alt=""
              />
              <Typography>EMI</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className=" bg-white mx-5 p-7">
        <Box className="container mx-auto">
          <Typography sx={{ fontSize: "18px", paddingBottom: "25px" }}>
            Services
          </Typography>
          <Box className="flex items-center justify-between flex-wrap gap-10 md:gap-14 lg:gap-5">
            {/* 1 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/support-icon.svg"
                alt=""
              />
              <Typography>Support</Typography>
            </Box>

            {/* 2 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/e-warranty-icon.svg"
                alt=""
              />
              <Typography>Warranty</Typography>
            </Box>

            {/* 3 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/bnpl-icon.svg"
                alt=""
              />
              <Typography>BNPL</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className=" bg-white m-5 p-7">
        <Box className="container mx-auto">
          <Typography sx={{ fontSize: "18px", paddingBottom: "25px" }}>
            Profile
          </Typography>
          <Box className="flex items-center justify-between flex-wrap gap-10 md:gap-14 lg:gap-5 md:w-[52%]">
            {/* 1 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/address-book.svg"
                alt=""
              />
              <Typography>Address Book</Typography>
            </Box>

            {/* 2 */}
            <Box className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <img
                className="w-10"
                src="https://static.priceoye.pk/images/my-account/complaints.svg"
                alt=""
              />
             <Typography>
                <Link to='/profile'>Edit Profile</Link>
              </Typography>    

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountManagement;
