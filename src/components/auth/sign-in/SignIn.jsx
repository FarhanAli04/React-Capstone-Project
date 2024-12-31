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
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required("Email address is required."),
    password: yup.string().required("Password is required.").min(8, "Password must be at least 8 characters long"),
  });

  const signInDetails = { email: "", password: "" };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: signInDetails,
    resolver: yupResolver(schema),
  });

  const signInHandler = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
      toast.success("Successfully logged in!");
      navigate("/account");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <Box className="bg-slate-100 h-screen">
        <ToastContainer />
        <Box className="flex flex-col w-full justify-center items-center pt-14">
          <Box className="w-96">
            <img
              src="https://static.priceoye.pk/images/login-header-img.svg"
              alt=""
            />
          </Box>
          <Box>
            <Box className="w-96 bg-white p-5">
              <Typography variant="h5" className="text-center text-base">
                Sign In
              </Typography>
              <Box className="text-center mt-2 mb-5 text-sm">
                <Typography>Enter your details to sign in to your account.</Typography>
              </Box>

              <form onSubmit={handleSubmit(signInHandler)}>
                <Box>
                  <Box className="my-3">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          fullWidth
                          type="email"
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="Email"
                          {...field}
                        />
                      )}
                    />
                    <Typography color="error">
                      {errors?.email?.message}
                    </Typography>
                  </Box>
                  <Box className="my-3">
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-password"
                          variant="outlined"
                          placeholder="Password"
                          fullWidth
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label={
                                  showPassword
                                    ? "hide the password"
                                    : "display the password"
                                }
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
                        />
                      )}
                    />
                    <Typography color="error">
                      {errors?.password?.message}
                    </Typography>
                  </Box>
                  <Box className="my-3">
                    <Button
                      type="submit"
                      variant="contained"
                      className="text-capitalize"
                      fullWidth
                      sx={{ backgroundColor: "#48afff", textTransform: "none" }}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;