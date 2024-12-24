import { Box, Button, Typography } from "@mui/material";
import React from "react";
import firstImg from "../../../assets/extended-warranty.svg";
import SecImg from "../../../assets/order-packaging.svg";
import ThirdImg from "../../../assets/feature-shipping.svg";
import fourthImg from "../../../assets/easy_instalment.svg";

const ReasonToBuy = () => {
  return (
    <>
      <div className="flex justify-start mb-4 mt-14" style={{ marginLeft: "5rem" }}>
        <h2 className="text-xl font-semibold text-gray-700">Reason to Buy</h2>
      </div>
      <Box className="container mx-auto px-4 my-8">
        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Card */}
          <Box className="flex items-center justify-around bg-blue-600 p-5 rounded-lg shadow-md w-[90%] mx-auto" sx={{ minHeight: 200 }}>
            <Box>
              <img src={firstImg} alt="" />
            </Box>
            <Box className="text-center">
              <Typography variant="h5" className="text-white">
                Priceoye
                <br />
                Extended Warranty
              </Typography>
              <Button
                variant="contained"
                className="!bg-orange-500 text-white"
                sx={{ mt: 2 }}
              >
                Know more
              </Button>
            </Box>
          </Box>

          {/* Second Card */}
          <Box className="flex items-center justify-around bg-blue-600 p-5 rounded-lg shadow-md w-[90%] mx-auto" sx={{ minHeight: 200 }}>
            <Box>
              <img src={SecImg} alt="" />
            </Box>
            <Box className="text-center">
              <Typography variant="h5" className="text-white">
                Packaging
                <br />
                Video
              </Typography>
              <Button
                variant="contained"
                className="!bg-orange-500 text-center"
                sx={{ mt: 2 }}
              >
                Know more
              </Button>
            </Box>
          </Box>

          {/* Third Card */}
          <Box className="flex items-center justify-around bg-blue-600 p-5 rounded-lg shadow-md w-[90%] mx-auto" sx={{ minHeight: 200 }}>
            <Box>
              <img src={ThirdImg} alt="" />
            </Box>
            <Box className="text-center">
              <Typography variant="h5" className="text-white">
                Open Parcel
                <br />
                (ISB - LHR - KHI)
              </Typography>
              <Button
                variant="contained"
                className="!bg-orange-500 text-center"
                sx={{ mt: 2 }}
              >
                Know more
              </Button>
            </Box>
          </Box>

          {/* Fourth Card */}
          <Box className="flex items-center justify-around bg-blue-600 p-5 rounded-lg shadow-md w-[90%] mx-auto" sx={{ minHeight: 200 }}>
            <Box>
              <img src={fourthImg} alt="" />
            </Box>
            <Box className="text-center">
              <Typography variant="h5" className="text-white">
                Easy
                <br />
                Installments
              </Typography>
              <Button
                variant="contained"
                className="!bg-orange-500 text-white"
                sx={{ mt: 2 }}
              >
                Know more
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReasonToBuy;