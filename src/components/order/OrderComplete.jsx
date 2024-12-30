import React from "react";
import { Box, Button, Typography, Paper, Grid, Divider } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useProductContext } from "../context/ProductContext";
import { useCheckoutContext } from "../context/CheckoutContext";

const OrderComplete = () => {
  const { selectedProduct } = useProductContext();
  const { checkoutData } = useCheckoutContext();

  React.useEffect(() => {
    if (!selectedProduct) {
      // Redirect to product page or show an error message
    }
  }, [selectedProduct]);

  if (!selectedProduct) {
    return <Typography>No product added to cart.</Typography>;
  }

  return (
    <Box className="min-h-screen bg-gray-100 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6 shadow-lg">
          <Box className="mb-6 text-center">
            <Typography variant="h4" className="mb-2">
              Order Receipt
            </Typography>
            <Box className="bg-blue-600 text-white p-4 rounded-lg inline-block">
              <Typography variant="h6">
                Order Number 1553473, {selectedProduct.title}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box className="space-y-6">
                <Box>
                  <Typography variant="h6" className="mb-2">
                    Contact Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Typography color="textSecondary">Name</Typography>
                      <Typography>{checkoutData.fullName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography color="textSecondary">Email</Typography>
                      <Typography>{checkoutData.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography color="textSecondary">Phone</Typography>
                      <Typography>{checkoutData.mobileNumber}</Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h6" className="mb-2">
                    Delivery Information
                  </Typography>
                  <Box className="space-y-2">
                    <Box>
                      <Typography color="textSecondary">Address</Typography>
                      <Typography>{checkoutData.address}</Typography>
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary">Province</Typography>
                        <Typography>{checkoutData.province}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary">City</Typography>
                        <Typography>{checkoutData.city}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary">Area</Typography>
                        <Typography>{checkoutData.city}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h6" className="mb-2">
                    Delivery Type
                  </Typography>
                  <Typography>Standard Shipping</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <Typography variant="h6" className="mb-4">
                  Order Summary
                </Typography>
                <Box className="space-y-4">
                  <Box className="flex gap-4">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-20 h-20 rounded-lg"
                    />
                    <Box>
                      <Typography variant="subtitle1">{selectedProduct.title}</Typography>
                      <Typography color="textSecondary">Color: {selectedProduct.color}</Typography>
                      <Typography color="textSecondary">
                        {selectedProduct.storage} - {selectedProduct.ram} RAM
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="space-y-2 border-t pt-4">
                    <Box className="flex justify-between">
                      <Typography>Market Price</Typography>
                      <Typography className="line-through">Rs {selectedProduct.originalPrice}</Typography>
                    </Box>
                    <Box className="flex justify-between">
                      <Typography>Sale Price</Typography>
                      <Typography>Rs {selectedProduct.currentPrice}</Typography>
                    </Box>
                    <Box className="flex justify-between text-green-600">
                      <Typography>Delivery Charges</Typography>
                      <Typography>Rs 0</Typography>
                    </Box>
                    <Box className="flex justify-between text-green-600">
                      <Typography>You're saving</Typography>
                      <Typography>Rs {selectedProduct.originalPrice - selectedProduct.currentPrice} on this order</Typography>
                    </Box>
                    <Box className="flex justify-between font-medium pt-2 border-t">
                      <Typography>Total Price</Typography>
                      <Typography>Rs {selectedProduct.currentPrice}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box className="mt-8 flex justify-end">
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              className="!normal-case"
            >
              Print Receipt
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderComplete;

