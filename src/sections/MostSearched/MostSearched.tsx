import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons

const MostSearched = () => {
  // State for selected brand
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Data for the cards
  const cardsData = [
    {
      id: 1,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Mazda CX-30-2021",
      price: "$54,614.00",
      location: "Kuala Lumpur",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Mazda",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Audi TT Roadster",
      price: "$85,032.00",
      discountPrice: "$89,600.00", // Discounted price
      location: "Melbourne City",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Audi",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Audi A4 Sedan",
      price: "$75,000.00",
      discountPrice: "$78,200.00", // Discounted price
      location: "Melbourne City",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Audi",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Audi a8i 2023",
      currentBid: "$383,730.00",
      location: "Melbourne City",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Audi",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Audi a8i 2023",
      currentBid: "$383,730.00",
      location: "Melbourne City",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Audi",
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300", // Replace with actual image link
      title: "Audi a8i 2023",
      currentBid: "$383,730.00",
      location: "Melbourne City",
      specs: {
        miles: "25,100 miles",
        fuel: "Petrol + Gas",
        cc: "22,231 cc",
      },
      brand: "Audi",
    },
  ];

  // Filter cards by selected brand
  const filteredCards =
    selectedBrand === "All"
      ? cardsData
      : cardsData.filter((card) => card.brand === selectedBrand);

  return (
    <div className="relative mx-auto my-10 w-full max-w-screen-2xl px-4 md:px-6">
      {/* Content Above the Slider */}
      <h2 className="mb-6 text-center text-3xl font-bold">
        Most Searched Used Car
      </h2>
      <div className="mb-8 flex flex-wrap justify-center space-x-4">
        {[
          "All",
          "Audi",
          "Mazda",
          "BMW",
          "Mercedes",
          "Ferrari",
          "Hyundai",
          "Tesla",
        ].map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`rounded-md px-4 py-2 ${selectedBrand === brand ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Custom Navigation Arrows */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 transform">
        <button className="custom-prev rounded-full bg-gray-300 p-2 shadow-md">
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 transform">
        <button className="custom-next rounded-full bg-gray-300 p-2 shadow-md">
          <FaArrowRight className="text-xl" />
        </button>
      </div>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Attach custom buttons to swiper
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-lg bg-white p-4 shadow-lg my-6">
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full rounded-md object-cover"
              />
              <h3 className="mt-2 font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.price || card.currentBid}</p>
              <p className="text-sm text-gray-500">{card.location}</p>
              <p className="text-sm text-gray-500">
                {card.specs.miles}, {card.specs.fuel}, {card.specs.cc}
              </p>
              <p className="mt-4 w-full py-2 text-black">
                View Details
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostSearched;
