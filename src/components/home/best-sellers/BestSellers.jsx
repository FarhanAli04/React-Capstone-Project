import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import products from "../../../data/productsData";

const BestSellers = () => {
  return (
    <Box className="container mx-auto px-3">
      <Box className="text-center mb-8">
        <Typography className="!text-xl !font-semibold text-[#3a3b3a]">
          Best Seller
        </Typography>
        <Typography className="!text-md text-[#4d4e4d]">
          Get the best prices in town
        </Typography>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Box className="bg-white py-7 px-5 rounded-md">
              <Typography className="!text-sm !font-semibold">
                {product.title}
              </Typography>
              <Box className="flex justify-center">
                <img
                  className="object-cover w-40"
                  src={product.image}
                  alt={product.title}
                />
              </Box>
              <Box className="flex items-center bg-[#faf4e3] mb-6 mt-3 px-2 rounded-full w-32">
                <Typography className="!text-sm">
                  <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} /> {product.rating}
                </Typography>
                <Typography className="!text-[11px] ps-2">{product.reviews} Reviews</Typography>
              </Box>
              <Typography className="!text-sm lining-nums">
                <span className="text-xs relative -top-2">Rs</span> {product.currentPrice}
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
                  <span className="text-xs relative -top-1">Rs</span> {product.originalPrice}
                </Typography>
                <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                  {product.discountPercentage}% OFF
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BestSellers;