import React from "react";

const ShopByBrand = () => {
  const brands = [
    { name: "Samsung", logo: "https://static.priceoye.pk/images/brands/svg/samsung.svg" },
    { name: "Infinix", logo: "https://static.priceoye.pk/images/brands/svg/infinix.svg" },
    { name: "OPPO", logo: "https://static.priceoye.pk/images/brands/svg/oppo.svg" },
    { name: "Xiaomi", logo: "https://static.priceoye.pk/images/brands/svg/xiaomi.svg" },
    { name: "Vivo", logo: "https://static.priceoye.pk/images/brands/svg/vivo.svg" },
    { name: "Tecno", logo: "https://static.priceoye.pk/images/brands/svg/tecno.svg" },
    { name: "Realme", logo: "https://static.priceoye.pk/images/brands/svg/realme.svg" },
    { name: "itel", logo: "https://static.priceoye.pk/images/brands/svg/itel.svg" },
    { name: "Apple", logo: "https://static.priceoye.pk/images/brands/svg/apple.svg" },
    { name: "Nokia", logo: "https://static.priceoye.pk/images/brands/svg/nokia.svg" },
  ];

  const reviews = [
    {
      name: "Asad Azad",
      date: "18 December 2024",
      comment:
        "very good packing very fast delivery new and genuine mobile thanks price oye highly recomended price oye is best than draz iam...",
      rating: 5,
      image: "https://images.priceoye.pk/review/7555/1540124-hopti-270x270.jpg",
    },
    {
      name: "Fahad Ali",
      date: "17 December 2024",
      comment:
        "Price ky hissab sy boht acha phone hai main week use krny ky bad review dall raha paisa wasool phone hai and thanks price oye boht ac...",
      rating: 5,
      image: "https://images.priceoye.pk/review/7710/1530896-0ofrw-270x270.jpg",
    },
    {
      name: "Hammad Mustafa",
      date: "22 December 2024",
      comment:
        "Original product. Brand new and great experience with price.",
      rating: 5,
      image: "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Shop by Brand Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold">Shop by Brand</h2>
          <button className="px-6 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300">
            View All
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-16 h-16 mx-auto"
              />
              <p className="mt-2 text-sm font-medium">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <p className="mb-6 text-gray-600">
            What our Customers say about Priceoye.pk
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {reviews.map((review, index) => (
              <img
                key={index}
                src={review.image}
                alt={`Review ${index + 1}`}
                className="rounded-lg w-full h-auto"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 border rounded bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                    {review.name.split(" ")[0][0]}
                    {review.name.split(" ")[1][0]}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="mb-3 text-yellow-500">
                  {"★".repeat(review.rating).padEnd(5, "☆")}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrand;
