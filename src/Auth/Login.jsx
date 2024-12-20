import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const schema = yup.object({
    email: yup.string().required("Email address is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long"),
  });

  const signInDetails = { email: "", password: "" };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: signInDetails,
    resolver: yupResolver(schema),
  });

  const signInHandler = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      navigate("/");
      toast.success("Successfully logged in!");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f7fa",
        }}
      >
        <ToastContainer />
        <Box
          sx={{
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              backgroundColor: "#e8f4ff",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              padding: "16px",
            }}
          >
            <img
              src="https://static.priceoye.pk/images/login-header-img.svg"
              alt="Login Illustration"
              style={{
                width: "100%",
                maxHeight: "150px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Form Section */}
          <Box sx={{ padding: "24px" }}>
            <Typography
              variant="h5"
              sx={{ marginBottom: "8px", fontWeight: 600 }}
            >
              Login
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "16px", color: "#6b7280" }}
            >
              Enter your details to sign in to your account.
            </Typography>
            <form onSubmit={handleSubmit(signInHandler)}>
              <Box sx={{ marginBottom: "16px" }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      size="small"
                      fullWidth
                      type="email"
                      placeholder="Email"
                      {...field}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  )}
                />
                <Typography
                  color="error"
                  sx={{ fontSize: "0.875rem", marginTop: "4px" }}
                >
                  {errors?.email?.message}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "16px" }}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <OutlinedInput
                      size="small"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <FontAwesomeIcon icon={faEyeSlash} />
                            ) : (
                              <FontAwesomeIcon icon={faEye} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      {...field}
                      sx={{
                        borderRadius: "8px",
                      }}
                    />
                  )}
                />
                <Typography
                  color="error"
                  sx={{ fontSize: "0.875rem", marginTop: "4px" }}
                >
                  {errors?.password?.message}
                </Typography>
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#4e94f4",
                  textTransform: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#3579d7",
                  },
                }}
              >
                Sign in
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
