import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "./productsData";
import { useProductContext } from "../../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedProduct, setSelectedProduct } = useProductContext();

  React.useEffect(() => {
    const product = products.find((item) => item.id.toString() === id);
    setSelectedProduct(product);
  }, [id, setSelectedProduct]);

  if (!selectedProduct) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      // Add product to cart logic here
      navigate("/checkout");
    } else {
      // Handle error
      alert("Product not found.");
    }
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Box className="container mx-auto px-4 py-8">
        <Box className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-md">
          <Box className="flex flex-col items-center space-y-4">
            <Box className="relative rounded-xl overflow-hidden flex justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-auto object-contain border border-gray-300 rounded-xl"
                style={{ maxWidth: "300px" }}
              />
            </Box>
            {selectedProduct.thumbnails && (
              <Box className="grid grid-cols-4 gap-2">
                {selectedProduct.thumbnails.map((thumbnail, index) => (
                  <Box
                    key={index}
                    className="relative rounded-md overflow-hidden border border-gray-200 hover:border-blue-400 cursor-pointer"
                  >
                    <img
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box className="space-y-6">
            <Typography variant="h4" className="font-bold text-gray-800">
              {selectedProduct.title}
            </Typography>
            <Box className="flex items-center gap-2">
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <Typography>{selectedProduct.rating}</Typography>
              <Typography className="text-sm text-gray-500 ml-2">
                {selectedProduct.reviews} Reviews
              </Typography>
            </Box>
            <Box className="flex items-center gap-4">
              <Typography variant="h5" className="text-green-600 font-semibold">
                Rs {selectedProduct.currentPrice}
              </Typography>
              <Typography className="text-gray-500 line-through">
                Rs {selectedProduct.originalPrice}
              </Typography>
              <Typography className="text-sm text-red-600">
                {selectedProduct.discountPercentage}% off
              </Typography>
            </Box>
            <Typography className="text-sm text-gray-700">
              Availability: {selectedProduct.availability}
            </Typography>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              className="!bg-orange-500 !hover:bg-orange-600 text-white font-bold"
            >
              Add to Cart
            </Button>
            <Box className="flex gap-6 mt-4">
              <Box className="text-center">
                <img
                  src="https://static.priceoye.pk/icons/warranty-feature.svg"
                  alt="Warranty"
                  className="w-10 h-10 mx-auto"
                />
                <Typography className="text-sm text-gray-600">
                  3 Days Warranty
                </Typography>
              </Box>
              <Box className="text-center">
                <img
                  src="https://static.priceoye.pk/icons/easy-feature.svg"
                  alt="Returns"
                  className="w-10 h-10 mx-auto"
                />
                <Typography className="text-sm text-gray-600">
                  Easy Returns
                </Typography>
              </Box>
              <Box className="text-center">
                <img
                  src="https://static.priceoye.pk/icons/shipping-feature.svg"
                  alt="Delivery"
                  className="w-10 h-10 mx-auto"
                />
                <Typography className="text-sm text-gray-600">
                  Fast Delivery
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;

