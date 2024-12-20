import { Box } from "@mui/material";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const schema = yup.object({
    fullName: yup
      .string()
      .min(3, "Full name must be at least 3 characters long.")
      .required("Full name is required."),
    email: yup.string().email("Enter a valid email").required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be 8 characters long.")
      .matches(/[0-9]/, "Password must include a number.")
      .matches(/[a-z]/, "Password must include a lowercase letter.")
      .matches(/[A-Z]/, "Password must include an uppercase letter.")
      .matches(/[^\w]/, "Password must include a special character."),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/Login");
    reset();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
      }}
    >
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
            alt="Register Illustration"
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
            Register
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: "16px", color: "#6b7280" }}
          >
            Enter your details to create an account.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ marginBottom: "16px" }}>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth
                    label="Full Name"
                    {...field}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth
                    label="Email"
                    {...field}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
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
                {errors.password?.message}
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
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
