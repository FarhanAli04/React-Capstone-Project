// filepath: /E:/React Capstone/my-capstone/src/Components/home/productSection2/ProductSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "./productsData";
import { useProductContext } from "../../context/ProductContext";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const ProductSection = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useProductContext();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

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
        <Box className="container mx-auto pt-7 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-white">
            Latest Smart Watches
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View all
          </Button>
        </Box>

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
              onClick={() => handleProductClick(item)}
            >
              <Box className="flex flex-col justify-center items-center !mt-5">
                <img className="w-28" src={item.image} alt={item.title} />
                <Typography>{item.title}</Typography>
                <Box className="flex items-center gap-2 mt-2">
                  <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />
                  <Typography>{item.rating}</Typography>
                </Box>
                <Typography variant="h6" className="mt-2">Rs {item.currentPrice}</Typography>
                <Typography className="text-gray-500 line-through">
                  Rs {item.originalPrice}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductSection;