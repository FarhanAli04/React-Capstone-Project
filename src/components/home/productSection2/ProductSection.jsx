import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "./productsData"; // Import the product list

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const ProductSection = () => {
  return (
    <Box className="bg-gray-200">
      <Box
        sx={{
          backgroundImage: "url('https://static.priceoye.pk/images/categories/section-smart-watches-bg.png')",
          backgroundSize: "cover",
          marginTop: "100px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52"
      >
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          grid={{ rows: 2 }}
          spaceBetween={15}
          modules={[Grid, Navigation]}
          className="customSwiper container mx-auto"
        >
          {products.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5 cursor-pointer drop-shadow-md"
            >
              <Link to={`/product/${item.id}`} className="block">
                <Box className="flex flex-col justify-center items-center !mt-5">
                  <img className="w-28" src={item.image} alt={item.title} />
                  <Typography>{item.title}</Typography>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductSection;
