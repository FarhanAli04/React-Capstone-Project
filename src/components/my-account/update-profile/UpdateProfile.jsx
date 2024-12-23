import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";


const UpdateProfile = () => {

const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
        fullName: "",
        email: "",
        password: "",
      };
    
      const { control, handleSubmit, reset } = useForm({
        defaultValues: {
          fullName: storedUser.fullName,
          email: storedUser.email,
        },
      });
    
      const updateProfileHandler = (data) => {
        const updatedUser = { ...storedUser, ...data }; 
        localStorage.setItem("user", JSON.stringify(updatedUser)); 
        reset(); 
        navigate('/')
      };

  return (
    <Box className="h-[90vh] bg-slate-100 flex justify-center">
    <Box className="w-full mx-3 md:mx-14 lg:w-1/2 mt-20">
      {/* Navbar */}
      <AppBar
        position="static"
        className="py-2"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar variant="dense">
          <Link to="/account" className="me-3">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <Typography variant="h6" component="p" className="text-decoration-none">
            Edit Profile
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Edit Profile Form */}
      <Box className="mt-7 bg-white p-5">
        <form onSubmit={handleSubmit(updateProfileHandler)}>
          <Box className="my-3">
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Full Name"
                  {...field}
                />
              )}
            />
          </Box>

          <Box className="my-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  variant="outlined"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
          </Box>

          <Box className="my-3">
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#48afff", textTransform: "none" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  </Box>
  );
};

export default UpdateProfile;