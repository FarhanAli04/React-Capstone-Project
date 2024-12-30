import { useState } from "react"
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
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { useNavigate } from "react-router-dom"
import { useCheckoutContext } from "../context/CheckoutContext"
import PropTypes from 'prop-types'

const steps = ["Add to Cart", "Contact Info", "Delivery", "Payment"]

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

export default function CheckoutForm({ product }) {
  const [activeStep, setActiveStep] = useState(0)
  const { setCheckoutData } = useCheckoutContext()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    province: "",
    city: "",
    address: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      setCheckoutData(formData)
      navigate("/order-complete")
    }
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
                      StepIconComponent={({ active, completed }) =>
                        completed || active ? (
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <CheckCircleIcon className="text-white text-xl" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                            {index + 1}
                          </div>
                        )
                      }
                    >
                      <span className="text-sm font-medium">{label}</span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Product Card */}
              {product && (
                <div className="mb-6 border rounded-lg p-4">
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <Typography variant="h6" className="font-medium">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {product.description}
                        </Typography>
                      </div>
                      <Typography variant="h6" className="text-blue-500">
                        ₹{product.price.toLocaleString()}
                      </Typography>
                    </div>
                  </div>
                </div>
              )}

              {/* Warranty Card */}
              <div className="mb-6 border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="text-green-600 text-sm" />
                  </div>
                  <Typography variant="subtitle1" className="font-medium">
                    2 Year Warranty
                  </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" className="mb-3">
                  1-Year Brand (free) + 1-Year Extended Warranty
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  className="text-blue-500 border-blue-500"
                >
                  Add Item
                </Button>
              </div>

              {/* Insurance Card */}
              <div className="mb-6 border rounded-lg p-4">
                <Typography variant="subtitle1" className="font-medium mb-2">
                  Insurance
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3">
                  Covers Theft, Loss and Upto 50% Screen Damage
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  className="text-blue-500 border-blue-500"
                >
                  Add Item
                </Button>
              </div>

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
          {product && (
            <div className="lg:col-span-1">
              <Paper className="bg-white rounded-xl shadow-sm p-6">
                <Typography variant="h6" className="mb-4">
                  Order Summary
                </Typography>
                <div className="flex gap-4 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <Typography variant="body2" color="textSecondary">
                      Market Price
                    </Typography>
                    <Typography variant="body2">₹{(product.price * 1.1).toFixed(2)}</Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="textSecondary">
                      Sale Price
                    </Typography>
                    <Typography variant="body2">₹{product.price.toLocaleString()}</Typography>
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
                    ₹{product.price.toLocaleString()}
                  </Typography>
                </div>
                <Button
                  variant="text"
                  fullWidth
                  className="mt-4 text-blue-500 normal-case"
                >
                  Apply Coupon
                </Button>
              </Paper>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}