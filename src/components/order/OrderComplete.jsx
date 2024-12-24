import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const OrderComplete = () => {
  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Box className="mb-6">
            <Typography variant="h4" className="mb-2">
              Order Receipt
            </Typography>
            <Box className="bg-blue-500 text-white p-4 rounded-lg">
              <Typography variant="h6">
                Order Number 1553473, Xiaomi Poco C75
              </Typography>
            </Box>
          </Box>

          <Box className="grid md:grid-cols-3 gap-8">
            <Box className="md:col-span-2 space-y-6">
              <Box>
                <Typography variant="h6" className="mb-2">
                  Contact Details
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <Box>
                    <Typography color="textSecondary">Name</Typography>
                    <Typography>Farhan</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Email</Typography>
                    <Typography>fa654313@gmail.com</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Phone</Typography>
                    <Typography>03173257836</Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" className="mb-2">
                  Delivery Information
                </Typography>
                <Box className="space-y-2">
                  <Box>
                    <Typography color="textSecondary">Address</Typography>
                    <Typography>43 d</Typography>
                  </Box>
                  <Box className="grid grid-cols-3 gap-4">
                    <Box>
                      <Typography color="textSecondary">Province</Typography>
                      <Typography>Sindh</Typography>
                    </Box>
                    <Box>
                      <Typography color="textSecondary">City</Typography>
                      <Typography>Karampur</Typography>
                    </Box>
                    <Box>
                      <Typography color="textSecondary">Area</Typography>
                      <Typography>Karampur</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" className="mb-2">
                  Delivery Type
                </Typography>
                <Typography>Standard Shipping</Typography>
              </Box>
            </Box>

            <Box className="bg-gray-50 p-4 rounded-lg">
              <Typography variant="h6" className="mb-4">
                Order Summary
              </Typography>
              <Box className="space-y-4">
                <Box className="flex gap-4">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Product"
                    className="w-20 h-20 rounded-lg"
                  />
                  <Box>
                    <Typography variant="subtitle1">Xiaomi Poco C75</Typography>
                    <Typography color="textSecondary">Color: GOLD</Typography>
                    <Typography color="textSecondary">
                      256GB - 8GB RAM
                    </Typography>
                  </Box>
                </Box>

                <Box className="space-y-2 border-t pt-4">
                  <Box className="flex justify-between">
                    <Typography>Market Price</Typography>
                    <Typography className="line-through">Rs 36,999</Typography>
                  </Box>
                  <Box className="flex justify-between">
                    <Typography>Sale Price</Typography>
                    <Typography>Rs 31,999</Typography>
                  </Box>
                  <Box className="flex justify-between text-green-600">
                    <Typography>Delivery Charges</Typography>
                    <Typography>Rs 0</Typography>
                  </Box>
                  <Box className="flex justify-between text-green-600">
                    <Typography>You're saving</Typography>
                    <Typography>Rs 5,000 on this order</Typography>
                  </Box>
                  <Box className="flex justify-between font-medium pt-2 border-t">
                    <Typography>Total Price</Typography>
                    <Typography>Rs 31,999</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

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

