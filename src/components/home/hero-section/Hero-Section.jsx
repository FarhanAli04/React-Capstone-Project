import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Img1 from "../../../assets/hero-1.jpg"
import Img2 from "../../../assets/hero-2.jpg"
import Img3 from "../../../assets/hero-3.jpg"
import Img4 from "../../../assets/hero-4.jpg"
import Img5 from "../../../assets/hero-5.jpg"
import Img6 from "../../../assets/hero-6.jpg"
import Img7 from "../../../assets/hero-7.jpg"
import Img8 from "../../../assets/hero-8.jpg"
import Banner from "../../../assets/sale-campaign-banner.gif"

import { Navigation}  from 'swiper/modules';
import { Box } from '@mui/material';

const HeroSection = () => {

    const heroImages = [
        {
            id:1,
            image: Img1
        },
        {
            id:1,
            image: Img2
        },
        {
            id:1,
            image: Img3
        },
        {
            id:1,
            image: Img4
        },
        {
            id:1,
            image: Img5
        },
        {
            id:1,
            image: Img6
        },
        {
            id:1,
            image: Img7
        },
        {
            id:1,
            image: Img8
        },
    ]

  return (
    <>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >

       {heroImages.map((item)=>(
         <SwiperSlide key={item.id}>
            <img src={item.image} alt="" />
         </SwiperSlide>
       ))}
       
      </Swiper>

       <Box className="py-5 lg:py-7 md:px-12 bg-slate-100">
        <img src={Banner} alt="" />
       </Box>

    </>
  )
}

export default HeroSection