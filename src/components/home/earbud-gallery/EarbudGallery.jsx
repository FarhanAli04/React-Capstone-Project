import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./swiper.css";
import { Grid } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const EarbudGallery = () => {
  const product = [
    {
      id: 1,
      image:
        "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
      title: "Redmi Buds 6 Active Wireless Earbuds",
      currentPrice: 4549,
      originalPrice: 7399,
      discountPercentage: 39,
      rating: 5.0,
      reviews: 17,
    },
    {
      id: 2,
      image:
        "https://images.priceoye.pk/realme-t100-wireless-earbuds-pakistan-priceoye-tq6ud-270x270.webp",
      title: "Realme T100 Wireless Earbuds",
      currentPrice: 4999,
      originalPrice: 7000,
      discountPercentage: 29,
      rating: 54.9,
      reviews: 38,
    },
    {
      id: 3,
      image:
        "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-qouw0-270x270.webp",
      title: "Nothing Buds Pro 2",
      currentPrice: 13499,
      originalPrice: 20000,
      discountPercentage: 33,
      rating: 4.5,
      reviews: 5,
    },
    {
      id: 4,
      image:
        "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
      title: "Anker R50i Earbuds",
      currentPrice: 4611,
      originalPrice: 7199,
      discountPercentage: 36,
      rating: 4.7,
      reviews: 30,
    },
    {
      id: 5,
      image:
        "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
      title: "Soundpeats Engine4 Wireless Earbuds",
      currentPrice: 10518,
      originalPrice: 14000,
      discountPercentage: 25,
      rating: 4.6,
      reviews: 13,
    },
    {
      id: 6,
      image:
        "https://images.priceoye.pk/samsung-galaxy-buds3-pro-pakistan-priceoye-b0lez-270x270.webp",
      title: "Samsung Galaxy Buds 3 Pro ",
      currentPrice: 49799,
      originalPrice: 69999,
      discountPercentage: 29,
      rating: 4.7,
      reviews: 7,
    },

    {
      id: 7,
      image:
        "https://images.priceoye.pk/qcy-t13-anc-2-pakistan-priceoye-uvlbc-270x270.webp",
      title: "QCY T13 ANC 2",
      currentPrice: 5499,
      originalPrice: 6000,
      discountPercentage: 8,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 8,
      image:
        "https://images.priceoye.pk/realme-buds-t110-pakistan-priceoye-w0l3s-270x270.webp",
      title: "Realme Buds T110",
      currentPrice: 4999,
      originalPrice: 10500,
      discountPercentage: 52,
      rating: 4.8,
      reviews: 11,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp",
      title: "Audionic Airbud 550",
      currentPrice: 3811,
      originalPrice: 9990,
      discountPercentage: 62,
      rating: 4.8,
      reviews: 537,
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/imilab-imiki-mt2-wireless-erbuds-pakistan-priceoye-obxhu-270x270.webp",
      title: "Imiki MT2 Wireless Erbuds",
      currentPrice: 3899,
      originalPrice: 6999,
      discountPercentage: 44,
      rating: 4.6,
      reviews: 14,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-earbuds-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52"
      >
        <Box className="container mx-auto pt-7 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-white">
            Latest Wireless Earbuds
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
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          grid={{
            rows: 2,
          }}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="customSwiper container mx-auto"
        >
          {product.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5 cursor-pointer drop-shadow-md"
            >
              <Box className="flex flex-col justify-center items-center !mt-5">
                <Box className="text-center">
                  <img className="w-28" src={item.image} alt={item.title} />
                  <Box className="flex items-center bg-[#FBF7EB] px-2 rounded-full relative -left-16 -top-2">
                    <Typography className="!text-sm">
                      {" "}
                      <FontAwesomeIcon
                        className="text-[#FFC61C]"
                        icon={faStar}
                      />{" "}
                      {item.rating}
                    </Typography>
                    <Typography className="!text-[11px] ps-2">
                      {" "}
                      {item.reviews} Reviews
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start gap-3 mt-4 w-60 text-start pb-4 ">
                  <Typography className="!text-[15px]">{item.title}</Typography>
                  <Typography className="!font-semibold !text-xl lining-nums">
                    <span className="text-sm font-medium relative -top-2">
                      Rs
                    </span>{" "}
                    {item.currentPrice}
                  </Typography>
                  <Box className="flex justify-between items-center w-full pb-2">
                    <Typography className="!text-sm lining-nums line-through decoration-red-500 text-slate-400">
                      <span className="text-xs relative -top-2">Rs</span>{" "}
                      {item.originalPrice}
                    </Typography>
                    <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                      {item.discountPercentage}% OFF
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default EarbudGallery;