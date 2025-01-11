import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import { useCheckoutContext } from "../context/CheckoutContext";
import { useProductContext } from "../context/ProductContext"; 
import PropTypes from "prop-types";

const steps = ["Add to Cart", "Contact Info", "Delivery", "Payment"];

const ProductPropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

CheckoutForm.propTypes = {
  product: PropTypes.shape(ProductPropTypes).isRequired,
};

CheckoutForm.defaultProps = {
  product: {
    name: "",
    description: "",
    price: 0,
    image: "",
  },
};

export default function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const { setCheckoutData } = useCheckoutContext();
  const { cart } = useProductContext(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart"); 
    }
  }, [cart, navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    province: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.address) {
      alert("Please fill out all required fields.");
      return;
    }

    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setCheckoutData(formData);
      navigate("/order-complete"); 
    }
  };

  if (cart.length === 0) {
    return <Typography>Cart is empty. Please add items to the cart.</Typography>;
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Paper className="bg-white rounded-xl shadow-sm p-6">
              <Stepper activeStep={activeStep} className="mb-8">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={({ active, completed }) => (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            completed || active
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {completed ? <CheckCircleIcon /> : index + 1}
                        </div>
                      )}
                    >
                      <span className="text-sm font-medium">{label}</span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Product Card */}
              {cart.length > 0 && cart.map((product) => (
                <div key={product.id} className="mb-6 border rounded-lg p-4">
                  <div className="flex gap-4">
                    <img
                      src={product.image || "placeholder.jpg"}
                      alt={product.name || "Product Image"}
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <Typography variant="h6" className="font-medium">
                          {product.name || "Unnamed Product"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {product.description || "No description available."}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Quantity: {product.quantity}
                        </Typography>
                      </div>
                      <Typography variant="h6" className="text-blue-500">
                        ₹{product.price ? product.price.toLocaleString() : "N/A"}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white"
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white"
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Province"
                      variant="outlined"
                      required
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="bg-white"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="bg-white"
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  required
                  multiline
                  rows={2}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-white"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className="bg-blue-500 hover:bg-blue-600 normal-case py-3 text-base"
                >
                  {activeStep === steps.length - 1 ? "Complete Order" : "Continue"}
                </Button>
              </form>
            </Paper>
          </div>

          {/* Order Summary */}
          {cart.length > 0 && (
            <div className="lg:col-span-1">
              <Paper className="bg-white rounded-xl shadow-sm p-6">
                <Typography variant="h6" className="mb-4">
                  Order Summary
                </Typography>
                {cart.map((product) => (
                  <div key={product.id} className="flex gap-4 mb-4">
                    <img
                      src={product.image || "placeholder.jpg"}
                      alt={product.name || "Product Image"}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <Typography variant="subtitle1" className="font-medium">
                        {product.name || "Unnamed Product"}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description || "No description available."}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Quantity: {product.quantity}
                      </Typography>
                    </div>
                  </div>
                ))}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <Typography variant="body2" color="textSecondary">
                      Market Price
                    </Typography>
                    <Typography variant="body2">
                      ₹{cart.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="textSecondary">
                      Sale Price
                    </Typography>
                    <Typography variant="body2">
                      ₹{cart.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="textSecondary">
                      Delivery Charges
                    </Typography>
                    <Typography variant="body2" className="text-green-500">
                      FREE
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t">
                  <Typography variant="subtitle1" className="font-medium">
                    Total Price
                  </Typography>
                  <Typography variant="subtitle1" className="font-medium">
                    ₹{cart.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
                  </Typography>
                </div>
              </Paper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}