import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorBoundary from '../ErrorBoundary';


const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      navigate("/order-complete");
    }
  };

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Box className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <Stepper activeStep={activeStep} className="mb-8">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={({ active, completed }) =>
                    completed || active ? (
                      <CheckCircleIcon className="text-blue-500" />
                    ) : (
                      <Box className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {steps.indexOf(label) + 1}
                      </Box>
                    )
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
            />
            <Box className="grid grid-cols-2 gap-4">
              <TextField
                fullWidth
                label="Province"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                required
              />
            </Box>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              required
              multiline
              rows={2}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-blue-500 !mt-4"
            >
              {activeStep === steps.length - 1 ? "Complete Order" : "Continue"}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutForm;

