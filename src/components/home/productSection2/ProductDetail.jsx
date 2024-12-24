import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "./productsData"; // Import the product list

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState("black");
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAddToCart = () => {
    navigate("/checkout");
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Box className="container mx-auto px-4 py-8">
        <Box className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-sm">
          <Box className="space-y-4">
            <Box className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </Box>
          </Box>
          <Box className="space-y-6">
            <Typography variant="h4">{product.title}</Typography>
            <Box className="flex items-center gap-2">
              <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />
              <Typography>{product.rating}</Typography>
              <Typography className="text-sm ml-2">{product.reviews} Reviews</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Rs {product.currentPrice}</Typography>
              <Typography className="text-gray-500 line-through">
                Rs {product.originalPrice}
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              className="!bg-orange-500 !hover:bg-orange-600"
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
