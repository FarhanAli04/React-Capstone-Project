import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

const BestSellers = () => {
  // const product = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.priceoye.pk/anker-soundcore-liberty-4-nc-earbuds-pakistan-priceoye-0cikw-500x500.webp",
  //     title: "Redmi Buds 6 Active Wireless Earbuds",
  //     currentPrice: 4549,
  //     originalPrice: 7399,
  //     discountPercentage: 39,
  //     rating: 5.0,
  //     reviews: 17,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.priceoye.pk/realme-t100-wireless-earbuds-pakistan-priceoye-tq6ud-270x270.webp",
  //     title: "Realme T100 Wireless Earbuds",
  //     currentPrice: 4999,
  //     originalPrice: 7000,
  //     discountPercentage: 29,
  //     rating: 54.9,
  //     reviews: 38,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-qouw0-270x270.webp",
  //     title: "Nothing Buds Pro 2",
  //     currentPrice: 13499,
  //     originalPrice: 20000,
  //     discountPercentage: 33,
  //     rating: 4.5,
  //     reviews: 5,
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
  //     title: "Anker R50i Earbuds",
  //     currentPrice: 4611,
  //     originalPrice: 7199,
  //     discountPercentage: 36,
  //     rating: 4.7,
  //     reviews: 30,
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
  //     title: "Soundpeats Engine4 Wireless Earbuds",
  //     currentPrice: 10518,
  //     originalPrice: 14000,
  //     discountPercentage: 25,
  //     rating: 4.6,
  //     reviews: 13,
  //   },
  // ]

  return (
    <Box className="container mx-auto px-3">
      <Box className="text-center mb-8">
        <Typography className="!text-xl !font-semibold text-[#3a3b3a]">
          Best Seller
        </Typography>
        <Typography className="!text-md text-[#4d4e4d]">
          Get the best prices in town
        </Typography>
      </Box>

      <Box className="flex flex-col lg:flex-row justify-between gap-4">
        <Box className="bg-white w-full lg:w-[40%] py-7 px-5 rounded-md">
          <Typography className="!text-sm !font-semibold">
            Anker Soundcore Liberty 4 NC Earbuds
          </Typography>
          <Box className="flex justify-center">
            <img
              className="object-cover w-96 mt-7"
              src=" https://images.priceoye.pk/poco-pad-8gb-256gb-pakistan-priceoye-teakg-500x500.webp"
              alt=""
            />
          </Box>
          <Box className="flex items-center bg-[#faf4e3] mb-6 lg:ms-28 -mt-3 px-2 rounded-full w-32">
            <Typography className="!text-sm">
              <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} /> 4.7
            </Typography>
            <Typography className="!text-[11px] ps-2">18 Reviews</Typography>
          </Box>

          <Typography className="!text-sm lining-nums">
            <span className="text-xs relative -top-2">Rs</span> 15,799
          </Typography>

          <Box className="flex justify-between items-center">
            <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
              <span className="text-xs relative -top-1">Rs</span>
              24,000
            </Typography>

            <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
              34% OFF
            </Typography>
          </Box>
        </Box>
        <Box className=" lg:w-[60%]">

          <Box>
            <Box className="flex flex-col md:flex-row gap-4">
              {/* card 1 */}
              <Box className="bg-white w-full lg:w-[49%] !h-[270px] py-7 px-5 rounded-md">
                <Box className="flex justify-between">
                  <Typography className="!text-sm !font-semibold">
                    Xiaomi Smart Band 8 Active
                  </Typography>
                  <Box className="flex justify-center">
                    <img
                      className="object-cover w-40"
                      src=" https://images.priceoye.pk/anker-soundcore-liberty-4-nc-earbuds-pakistan-priceoye-0cikw-270x270.webp"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box className="flex items-center bg-[#faf4e3] mb-6 md:ms-20 lg:ms-32 -mt-3 px-2 rounded-full w-32">
                  <Typography className="!text-sm">
                    <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />{" "}
                    5.0
                  </Typography>
                  <Typography className="!text-[11px] ps-2">
                    8 Reviews
                  </Typography>
                </Box>

                <Typography className="!text-sm lining-nums">
                  <span className="text-xs relative -top-2">Rs</span> 5,599
                </Typography>

                <Box className="flex justify-between items-center">
                  <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
                    <span className="text-xs relative -top-1">Rs</span>
                    9,000
                  </Typography>

                  <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                    38% OFF
                  </Typography>
                </Box>
              </Box>

              {/* card 2 */}

              <Box className="bg-white w-full lg:w-[49%] !h-[270px] py-7 px-5 rounded-md">
                <Box className="flex justify-between">
                  <Typography className="!text-sm !font-semibold">
                    Samsung Galaxy Buds 2 Pro
                  </Typography>
                  <Box className="flex justify-center">
                    <img
                      className="object-cover w-40"
                      src=" https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-tp64b-270x270.webp"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box className="flex items-center bg-[#faf4e3] mb-6 md:ms-20 lg:ms-32 -mt-3 px-2 rounded-full w-32">
                  <Typography className="!text-sm">
                    <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />{" "}
                    4.9
                  </Typography>
                  <Typography className="!text-[11px] ps-2">
                    110 Reviews
                  </Typography>
                </Box>

                <Typography className="!text-sm lining-nums">
                  <span className="text-xs relative -top-2">Rs</span> 26,599
                </Typography>

                <Box className="flex justify-between items-center">
                  <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
                    <span className="text-xs relative -top-1">Rs</span>
                    39,999
                  </Typography>

                  <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                    34% OFF
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-col md:flex-row gap-4 mt-4">
              {/* card 3*/}

              <Box className="bg-white w-full lg:w-[49%] !h-[270px]  py-7 px-5 rounded-md">
                <Box className="flex justify-between">
                  <Typography className="!text-sm !font-semibold">
                    Xiaomi Poco Pad
                  </Typography>
                  <Box className="flex justify-center">
                    <img
                      className="object-cover w-40"
                      src="  https://images.priceoye.pk/xiaomi-smart-band-8-active-pakistan-priceoye-np3x9-270x270.webp"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box className="flex items-center bg-[#faf4e3] mb-6 md:ms-20 lg:ms-32 -mt-3 px-2 rounded-full w-32">
                  <Typography className="!text-sm">
                    <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />{" "}
                    5.0
                  </Typography>
                  <Typography className="!text-[11px] ps-2">
                    2 Reviews
                  </Typography>
                </Box>

                <Typography className="!text-sm lining-nums">
                  <span className="text-xs relative -top-2">Rs</span> 73,999
                </Typography>

                <Box className="flex justify-between items-center">
                  <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
                    <span className="text-xs relative -top-1">Rs</span>
                    110,000
                  </Typography>

                  <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                    33% OFF
                  </Typography>
                </Box>
              </Box>

              {/* card 4 */}

              <Box className="bg-white w-full lg:w-[49%] !h-[270px] py-7 px-5 rounded-md">
                <Box className="flex justify-between">
                  <Typography className="!text-sm !font-semibold">
                    Zeblaze Btalk 2 Calling Watch
                  </Typography>
                  <Box className="flex justify-center">
                    <img
                      className="object-cover w-40"
                      src="https://images.priceoye.pk/zeblaze-btalk-2-calling-watch-pakistan-priceoye-8kbwa-270x270.webp"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box className="flex items-center bg-[#faf4e3] mb-6 md:ms-20 lg:ms-32 -mt-3 px-2 rounded-full w-32">
                  <Typography className="!text-sm">
                    <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />{" "}
                    5.0
                  </Typography>
                  <Typography className="!text-[11px] ps-2">
                    4 Reviews
                  </Typography>
                </Box>

                <Typography className="!text-sm lining-nums">
                  <span className="text-xs relative -top-2">Rs</span> 7,899
                </Typography>

                <Box className="flex justify-between items-center">
                  <Typography className="!text-xs lining-nums line-through decoration-red-500 text-slate-400">
                    <span className="text-xs relative -top-1">Rs</span>
                    8,999
                  </Typography>

                  <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                    12% OFF
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BestSellers;