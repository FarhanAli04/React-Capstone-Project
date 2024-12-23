import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user");
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <Box
        sx={{ textAlign: "center", mt: 5 }}
        className="flex flex-col items-center justify-center gap-2 pt-7 md:pt-16 px-2"
      >
        <Typography variant="h4">You don't have access to this page</Typography>
        <Typography variant="body1" gutterBottom>
          We're sorry, your account does not have permission this page.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#48AFFF" }}
          className="!capitalize"
          onClick={() => navigate("/sign-in")}
        >
          Continue to Login
        </Button>
      </Box>
    );
  }

  return <div>{children}</div>;
};

export default Protected;