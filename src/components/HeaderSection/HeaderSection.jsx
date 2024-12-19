import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  InputBase,
  styled,
  alpha,
  Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideDrawer from './SideDrawer';
import logo from '../../assets/logo.png';
import mobiles from '../../assets/mobiles.svg';
import earbuds from '../../assets/wireless-earbuds.svg';
import watches from '../../assets/smart-watches.svg';
import trimmers from '../../assets/trimmers-shaver.svg';
import powerbanks from '../../assets/power-banks.svg';
import chargers from '../../assets/mobile-chargers.svg';
import speakers from '../../assets/bluetooth-speakers.svg';
import tablets from '../../assets/tablets.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const categories = [
  { name: 'Mobiles', image: mobiles },
  { name: 'Wireless Earbuds', image: earbuds },
  { name: 'Smart Watches', image: watches },
  { name: 'Trimmers Shaver', image: trimmers },
  { name: 'Power Banks', image: powerbanks },
  { name: 'Wall Chargers', image: chargers },
  { name: 'Bluetooth Speakers', image: speakers },
  { name: 'Tablets', image: tablets },
];

export default function CustomAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setAnchorEl(null);
    navigate('/');
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#4da6ff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" style={{ width: '100px', maxWidth: '120px' }} />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
            {currentUser ? (
              <>
                <Button
                  onClick={handleMenuClick}
                  startIcon={<AccountCircleIcon />}
                  sx={{ 
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  {currentUser.fullName}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                    },
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              !isAuthPage && (
                <>
                  <Button
                    component={RouterLink}
                    to="/login"
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      ml: 1,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                      },
                    }}
                  >
                    Register
                  </Button>
                </>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {!isAuthPage && (
        <Box sx={{ mt: 2, mb: 4, px: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {categories.map((category, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={1.5}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src={category.image}
                  alt={category.name}
                  sx={{
                    width: { xs: '50px', sm: '60px', md: '70px' },
                    height: { xs: '50px', sm: '60px', md: '70px' },
                    objectFit: 'contain',
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
                >
                  {category.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}

