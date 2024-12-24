import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "https://static.priceoye.pk/icons/approved-feature.svg", 
      title: "PTA Approved",
      description: "Mobile Phone",
    },
    {
      icon: "https://static.priceoye.pk/icons/warranty-feature.svg", 
      description: "Brand Warranty",
    },
    {
      icon: "https://static.priceoye.pk/icons/video-shooting-camera.svg", 
      title: "Packaging Video",
      description: "See Your Product",
    },
    {
      icon: "https://static.priceoye.pk/icons/shipping-feature.svg", 
      title: "Fast Delivery",
      description: "All Over Pakistan",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
