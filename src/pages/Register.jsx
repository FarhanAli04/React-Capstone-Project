import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
import registerImage from '../assets/register-illustration.svg';

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const password = watch('password', '');

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      ...data,
      id: Date.now(),
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 0, pb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 200,
            bgcolor: '#f0f4ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box
            component="img"
            src={registerImage}
            alt="Register"
            sx={{
              width: '80%',
              maxHeight: '80%',
              objectFit: 'contain',
            }}
          />
        </Box>
        
        <Box sx={{ width: '100%', px: 4, pb: 4 }}>
          <Typography 
            component="h1" 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: '#333',
            }}
          >
            Register
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 4 }}
          >
            Enter your fullname, email for a faster checkout, to track the status
            of your order and more.
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: 2 }}>
              <Typography 
                component="label" 
                htmlFor="fullName" 
                sx={{ 
                  display: 'block', 
                  mb: 1, 
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Full Name *
              </Typography>
              <TextField
                id="fullName"
                fullWidth
                variant="outlined"
                placeholder="Enter your full name"
                {...register("fullName", { required: "Full name is required" })}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  }
                }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography 
                component="label" 
                htmlFor="email" 
                sx={{ 
                  display: 'block', 
                  mb: 1, 
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Email *
              </Typography>
              <TextField
                id="email"
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  }
                }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography 
                component="label" 
                htmlFor="password" 
                sx={{ 
                  display: 'block', 
                  mb: 1, 
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Password *
              </Typography>
              <TextField
                id="password"
                fullWidth
                type="password"
                variant="outlined"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  }
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography 
                component="label" 
                htmlFor="referralCode" 
                sx={{ 
                  display: 'block', 
                  mb: 1, 
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Referral code
              </Typography>
              <TextField
                id="referralCode"
                fullWidth
                variant="outlined"
                placeholder="Enter referral code (optional)"
                {...register("referralCode")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  }
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                bgcolor: '#4d94ff',
                '&:hover': {
                  bgcolor: '#3d86cc'
                },
                fontSize: '1rem',
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Continue
            </Button>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link 
                component={RouterLink} 
                to="/login" 
                sx={{
                  color: '#4d94ff',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

