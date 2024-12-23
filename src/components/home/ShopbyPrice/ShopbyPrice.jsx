import { Margin } from "@mui/icons-material";
import React from "react";

const ShopByPrice = () => {
  return (
    <div sx={{ marginTop: "200px" }} className="px-4 py-6 bg-gray-50 md:px-6 md:py-8">
      {/* Shop by Price Text */}
      <div className="flex justify-start mb-4">
        <h2 className="text-lg font-semibold text-gray-700 sm:text-xl">Shop by Price</h2>
      </div>

      {/* Price Buttons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 mb-6 sm:mt-6">
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Below Rs. 15,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 15,000 - Rs. 25,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 25,000 - Rs. 40,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 40,000 - Rs. 60,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 60,000 - Rs. 80,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 80,000 - Rs. 100,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Rs. 100,000 - Rs. 150,000
        </button>
        <button className="py-2 px-4 bg-yellow-300 hover:bg-[#48afff] text-white font-bold rounded">
          Above Rs. 150,000
        </button>
      </div>
    </div>
  );
};

export default ShopByPrice;
