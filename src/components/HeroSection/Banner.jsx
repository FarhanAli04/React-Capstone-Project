import React from 'react';
import { Box } from '@mui/material';
import staticBanner from '../../assets/sale-campaign-banner-2k4un.gif';

const Banner = () => {
    return (
        <Box
            id="static-banner"
            sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
            }}
        >
            <img
                src={staticBanner}
                alt="sale-banner"
                style={{
                    width: '80%', display: 'block', margin: '0 auto', 
                }}
            />
        </Box>
    );
};

export default Banner;
