import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage01 from '../../assets/pakistan-priceoye-slider-01.jpg';
import backgroundImage02 from '../../assets/pakistan-priceoye-slider-02.jpg';
import backgroundImage03 from '../../assets/pakistan-priceoye-slider-03.jpg';
import backgroundImage04 from '../../assets/pakistan-priceoye-slider-04.jpg';
import backgroundImage05 from '../../assets/pakistan-priceoye-slider-05.jpg';
import backgroundImage06 from '../../assets/pakistan-priceoye-slider-06.jpg';
import StaticBannerDesktop from '../../assets/sale-campaign-banner-2k4un.gif';

// HeroSection Component
const HeroSection = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', margin: '0 auto' }}>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {/* Slide 1 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage01})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Slide 2 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage02})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Slide 3 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage03})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Slide 4 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage04})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Slide 5 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage05})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Slide 6 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 450,
            backgroundImage: `url(${backgroundImage06})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Carousel>
    </Box>
  );
};

// StaticBanner Component
const StaticBanner = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Box id="static-banner" sx={{ width: '100%' }}>
      {/* Display the image */}
      <img
        src={StaticBannerDesktop}  // Using the imported image
        alt="sale-banner"
        style={{ width: '100%' }}
      />
    </Box>
  );
};

export { HeroSection, StaticBanner };
