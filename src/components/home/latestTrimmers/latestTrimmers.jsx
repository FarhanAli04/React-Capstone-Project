import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const LatestTrimmers = () => {
  const products = [
    {
      id: 1,
      image: "https://images.priceoye.pk/vgr-zero-t-blade-trimmer-v-030-pakistan-priceoye-c2lke-270x270.webp",
      title: "VGR Zero T-Blade Trimmer - V-030",
      currentPrice: 2559,
      originalPrice: 5500,
      discount: 53,
      rating: 3.7,
      reviews: 1,
      hasSaleBadge: true
    },
    {
      id: 2,
      image: "https://images.priceoye.pk/kemei-3-in-1-rechargeable-electric-shaver-trimmer-km-6332-pakistan-priceoye-l0abn-270x270.webp",
      title: "KEMEI 3 In 1 Rechargeable Electric Shaver & Trimmer KM-6332",
      currentPrice: 1749,
      originalPrice: 3700,
      discount: 53,
      rating: 4.9,
      reviews: 42,
      hasSaleBadge: true
    },
    {
      id: 3,
      image: "https://images.priceoye.pk/kemei-km-6331-3-in-1-grooming-kit-with-usb-charging-pakistan-priceoye-v2fgq-270x270.webp",
      title: "Kemei KM-6331 3 in 1 Grooming Kit with USB Charging",
      currentPrice: 1849,
      originalPrice: 3000,
      discount: 38,
      rating: 5.0,
      reviews: 1,
      hasSaleBadge: false
    },
    {
      id: 4,
      image: "https://images.priceoye.pk/dingling-professional-rf-608b-pakistan-priceoye-47iad-270x270.webp",
      title: "Dinglong Professional Beard And Hair Trimmer RF-609",
      currentPrice: 2399,
      originalPrice: 4000,
      discount: 40,
      rating: 4.8,
      reviews: 38,
      hasSaleBadge: true
    },
    {
      id: 5,
      image: "https://images.priceoye.pk/remington-pilot-personal-groomer-kit-pg180-pakistan-priceoye-i31xi-270x270.webp",
      title: "Dinglong Professional Beard And Hair Trimmer RF-609",
      currentPrice: 1799,
      originalPrice: 3500,
      discount: 49,
      rating: 4.7,
      reviews: 7,
      hasSaleBadge: true
    },
    {
      id: 6,
      image: "https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
      title: "Kemei Km-1613 Hair Clippers Men Professional Electric Trimmer",
      currentPrice: 3499,
      originalPrice: 6000,
      discount: 42,
      rating: 4.7,
      reviews: 9,
      hasSaleBadge: true
    },
    {
      id: 7,
      image: "https://images.priceoye.pk/kemei-7-in-1-grooming-kit-shaving-machine-set-km-580-pakistan-priceoye-xu1d2-270x270.webp",
      title: "VGR Stainless Steel Blade Trimmer - V-031",
      currentPrice: 2499,
      originalPrice: 6000,
      discount: 58,
      rating: 4.7,
      reviews: 9,
      hasSaleBadge: true
    },
    {
      id: 8,
      image: "https://images.priceoye.pk/kemei-km-6330-hair-beard-trimmer-3-in-1-pakistan-priceoye-kge42-270x270.webp",
      title: "REMINGTON Pilot Personal Groomer Kit PG180",
      currentPrice: 5899,
      originalPrice: 6900,
      discount: 15,
      rating: 5.0,
      reviews: 1,
      hasSaleBadge: false
    },
    {
      id: 9,
      image: "https://images.priceoye.pk/remington-g4-graphite-series-multi-grooming-kit-pg4000-pakistan-priceoye-9nbmc-270x270.webp",
      title: "Kemei 7 in 1 Grooming Kit Shaving Machine Set KM-580",
      currentPrice: 3699,
      originalPrice: 7000,
      discount: 47,
      rating: 4.7,
      reviews: 2,
      hasSaleBadge: false
    },
    {
      id: 10,
      image: "https://images.priceoye.pk/kemei-km-1613-hair-clippers-men-professional-electric-trimmer-pakistan-priceoye-1b36i-270x270.webp",
      title: "Kemei KM-6330 Trimmer 3 in 1",
      currentPrice: 1799,
      originalPrice: 3000,
      discount: 40,
      rating: 4.9,
      reviews: 22,
      hasSaleBadge: false
    }
  ];

  return (
    <div className="w-full bg-[#FF0099] py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-semibold">Latest Trimmers Shaver</h2>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            View All
          </button>
        </div>

        <Swiper
          modules={[Navigation, Grid]}
          navigation
          grid={{
            rows: 2,
            fill: 'row'
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
              grid: { rows: 2 }
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
              grid: { rows: 2 }
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              grid: { rows: 2 }
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
              grid: { rows: 2 }
            }
          }}
          className="!pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg p-4 relative h-full">
                {product.hasSaleBadge && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-[#FF0099] transform rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center rotate-[-45deg] w-full">
                        <div className="text-xs font-bold">12.12</div>
                        <div className="text-[10px]">SALE</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="aspect-square mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center mb-1">
                  <div className="flex items-center bg-[#FBF7EB] px-2 py-0.5 rounded-full">
                    <span className="text-[#FFC61C] mr-1 text-xs">★</span>
                    <span className="text-xs">{product.rating}</span>
                    <span className="text-[10px] text-gray-600 ml-1">
                      {product.reviews} {product.reviews === 1 ? 'Review' : 'Reviews'}
                    </span>
                  </div>
                </div>

                <h3 className="text-xs font-medium mb-1 line-clamp-2 min-h-[32px]">
                  {product.title}
                </h3>

                <div className="flex items-baseline mb-1">
                  <span className="text-[10px] align-top mr-0.5">Rs</span>
                  <span className="text-base font-semibold">{product.currentPrice.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-gray-400 line-through text-xs">
                    <span className="text-[10px]">Rs</span>
                    {product.originalPrice.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full">
                    {product.discount}% OFF
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestTrimmers;

