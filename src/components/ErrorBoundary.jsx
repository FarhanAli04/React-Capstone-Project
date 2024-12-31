import React from 'react';
import { Box, Typography } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Typography variant="h6">Something went wrong.</Typography>
        </Box>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;