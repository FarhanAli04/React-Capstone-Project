import * as React from 'react';
import {AppBar,Box,Toolbar,Button,InputBase,styled,alpha,Grid,Typography,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar Section */}
      <AppBar position="static" sx={{ bgcolor: '#4da6ff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
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

          {/* Right side buttons */}
          <Box>
  <Button
    variant="outlined"
    sx={{
      color: '#4da6ff', 
      backgroundColor: 'white', 
      borderColor: 'white',
      ml: 1,
      '&:hover': {
        backgroundColor: 'transparent', 
        color: 'white', 
        borderColor: 'white',
      },
    }}
  >
    Log in
  </Button>
  <Button
    variant="outlined"
    sx={{
      color: 'white', 
      backgroundColor: 'transparent', 
      borderColor: 'white',
      ml: 1,
      '&:hover': {
        backgroundColor: 'white', 
        color: '#4da6ff', 
        borderColor: 'white',
      },
    }}
  >
    Register
  </Button>
</Box>

        </Toolbar>
      </AppBar>

      {/* Lower Category Section */}
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
    </Box>
  );
}
