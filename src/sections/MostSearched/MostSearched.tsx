import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons

const MostSearched = () => {
  // Data for the cards
  const cardsData = [
    { id: 1, image: "https://picsum.photos/200/300", title: "Card 1" },
    { id: 2, image: "https://picsum.photos/200/300", title: "Card 2" },
    { id: 3, image: "https://picsum.photos/200/300", title: "Card 3" },
    { id: 4, image: "https://picsum.photos/200/300", title: "Card 4" },
    { id: 5, image: "https://picsum.photos/200/300", title: "Card 5" },
    { id: 6, image: "https://picsum.photos/200/300", title: "Card 6" },
  ];

  return (
    <div className="w-full mx-auto my-10 max-w-screen-2xl md:px-6 px-4 relative">
      {/* Custom Navigation Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 translate-x-4"> {/* Adjust left arrow */}
        <button className="custom-prev bg-gray-300 p-2 rounded-full shadow-md">
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 -translate-x-4"> {/* Adjust right arrow */}
        <button className="custom-next bg-gray-300 p-2 rounded-full shadow-md">
          <FaArrowRight className="text-xl" />
        </button>
      </div>

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
        {cardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostSearched;
