import React from "react";
import mobiles from "../../asest/mobiles.svg";
import earbuds from "../../asest/wireless-earbuds.svg";
import watches from "../../asest/smart-watches.svg";
import trimmer from "../../asest/trimmers-shaver.svg";
import powerbanks from "../../asest/power-banks.svg";
import chargers from "../../asest/mobile-chargers (1).svg";
import speakers from "../../asest/bluetooth-speakers.svg";
import tablets from "../../asest/tablets.svg";
import slide1Image from "../../asest/first heri1.jpg";
import slide2Image from "../../asest/second hero2.jpg";
import slide3Image from "../../asest/third hero3.jpg";
import slide4Image from "../../asest/fourth4 hero.jpg";
import slide5Image from "../../asest/fifth5hero.jpg";
import slide6Image from "../../asest/sixth6hero.jpg";
import slide7Image from "../../asest/7th hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import saleBanner from "../../asest/part 2hero.gif"; 
import { Container } from "@mui/material";

// Category Section Component
const CategorySection = () => {
  const categories = [
    { name: "Mobiles", image: mobiles }, 
    { name: "Wireless Earbuds", image: earbuds },
    { name: "Smart Watches", image: watches },
    { name: "Trimmers Shaver", image: trimmer },
    { name: "Power Banks", image: powerbanks },
    { name: "Wall Chargers", image: chargers },
    { name: "Bluetooth Speakers", image: speakers },
    { name: "Tablets", image: tablets },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center px-4 py-2 bg-white shadow-md flex-wrap justify-center w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 mb-1 group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-12 h-12 object-contain mb-1"
            />
            <p className="text-center text-sm font-medium">{category.name}</p>
            <div className="w-full mt-1 h-0.5 bg-transparent group-hover:bg-blue-500 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-[500px] relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={slide1Image}
            alt="Slide 1"
            className="object-contain "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2Image}
            alt="Slide 2"
            className="object-contain"
          /> 
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3Image}
            alt="Slide 3"
            className="object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4Image}
            alt="Slide 4"
            className="object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5Image}
            alt="Slide 5"
            className="object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide6Image}
            alt="Slide 6"
            className="object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide7Image}
            alt="Slide 7"
            className="object-contain"
          />
        </SwiperSlide>
      </Swiper>
      {/* Sale Banner */}
     <Container maxWidth="xl">
     <div className="mt-7">
        <img
          src={saleBanner}
          alt="Below Swiper"
          className="h-full"
        />
      </div>
     </Container>
    </div>
  );
};

export { HeroSection, CategorySection };