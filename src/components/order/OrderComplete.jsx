import React from "react";
import { Box, Button, Typography, Paper, Grid, Divider } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useProductContext } from "../context/ProductContext";
import { useCheckoutContext } from "../context/CheckoutContext";

const OrderComplete = () => {
  const { cart } = useProductContext();
  const { checkoutData } = useCheckoutContext();

  if (cart.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        style={{ marginTop: "20px" }}
      >
        No product added to cart.
      </Typography>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f9fafc", py: 8, minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Paper sx={{ p: 4, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px" }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Order Receipt
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "#007aff",
                color: "#fff",
                py: 1,
                px: 3,
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">Order Number 1553473</Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Contact and Delivery Details */}
            <Grid item xs={12} md={8}>
              <Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Contact Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        Name
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.fullName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        Email
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        Phone
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.mobileNumber}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Delivery Information
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Address
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {checkoutData.address}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        Province
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.province}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        City
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.city}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="textSecondary">
                        Area
                      </Typography>
                      <Typography variant="subtitle1">
                        {checkoutData.area}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Delivery Type
                  </Typography>
                  <Typography variant="subtitle1">Standard Shipping</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 3,
                  borderRadius: "12px",
                  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  Order Summary
                </Typography>
                {cart.map((product) => (
                  <Box key={product.id} sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "80px", height: "80px", borderRadius: "8px" }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Color: {product.color}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {product.storage} - {product.ram} RAM
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Quantity: {product.quantity}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 2, borderTop: "1px solid #ddd", pt: 2 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2">Market Price</Typography>
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: "line-through" }}
                        >
                          Rs {product.originalPrice}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2">Sale Price</Typography>
                        <Typography variant="body2">Rs {product.currentPrice}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", color: "green" }}>
                        <Typography variant="body2">You're saving</Typography>
                        <Typography variant="body2">
                          Rs {product.originalPrice - product.currentPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "bold",
                          mt: 1,
                          borderTop: "1px solid #ddd",
                          pt: 1,
                        }}
                      >
                        <Typography>Total Price</Typography>
                        <Typography>
                          Rs {product.currentPrice * product.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, textAlign: "right" }}>
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              sx={{ textTransform: "none", backgroundColor: "orange", color: "#fff" }}
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
