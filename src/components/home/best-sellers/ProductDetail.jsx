import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { selectSelectedProduct, setSelectedProduct } from '../../../features/productSlice';
import { useProductContext } from '../../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToCart } = useProductContext();
  const selectedProduct = useSelector(selectSelectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(setSelectedProduct(parseInt(id, 10)));
    }
  }, [id, dispatch]);

  if (!selectedProduct) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    navigate('/checkout');
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
                style={{ maxWidth: '300px' }}
              />
            </Box>
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
            <Button
              variant="contained"
              onClick={handleAddToCart}
              className="!bg-orange-500 !hover:bg-orange-600 text-white font-bold"
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