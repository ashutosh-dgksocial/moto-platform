import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CommentCard from "../../components/CommentCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const CustomerFeedback = () => {
  return (
    <>
      <div className="h-auto w-full bg-[#faf8fb] pb-6">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col">
            <div
              className="mt-12 text-[20px] font-medium text-[#46D993]"
              style={{ letterSpacing: "0.2em" }}
            >
              Customer Feedback
            </div>
            <div className="text-[36px] font-bold text-black">
              What Our Customers Are Saying
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* 1/4th Column */}
            <div className="border rounded-lg md:col-span-1">
              <div className="px-8 py-8">
                <div className="mt-6 justify-center flex">
                  <img
                    className="object-cover"
                    src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    alt="Google Logo"
                  />
                </div>
                <div className="flex justify-center">
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                </div>
                <div className="text-[16px] flex justify-center">Based on 1580 Reviews</div>

                <div className="border-t border-gray-300 mt-14"></div>
                <div className="mt-14 justify-center flex">
                  <img
                    className="object-cover"
                    src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    alt="Google Logo"
                  />
                </div>
                <div className="flex justify-center">
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                  <AiFillStar size={20} color="#de9621" />
                </div>
                <div className="text-[16px] flex justify-center">Based on 1580 Reviews</div>
              </div>
            </div>

            {/* 3/4th Column */}
            <div className="md:col-span-3">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true} // Enable infinite scrolling
                autoplay={{
                  delay: 3000, // Set delay to 3 seconds
                  disableOnInteraction: true, // Continue autoplay even after interaction
                }}
                speed={1500}
                className="mySwiper"
                navigation={{
                  nextEl: '.swiper-button-next2',
                  prevEl: '.swiper-button-prev2',
                }}
                modules={[Navigation,Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  375: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  425: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  641: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  1440: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <CommentCard
                    rating={5}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Gaurav"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommentCard
                    rating={3}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Ashutosh"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommentCard
                    rating={3}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Manali"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommentCard
                    rating={3}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Chandni"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommentCard
                    rating={3}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Aniket"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommentCard
                    rating={3}
                    image="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-logo.svg"
                    description="Drivco-Agency customer feedback is an invaluable source of literature from 45 BC, making it over 2000 years old."
                    Name="Vishal"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex justify-between mt-4">
             <AiOutlineLeft  size={36}  className="swiper-button-prev2 text-[#46d993] border border-[#46d993] 
             rounded-full p-2 hover:bg-[#46d993] hover:text-white cursor-pointer" />
              <AiOutlineRight  size={36}  className="swiper-button-next2 text-[#46d993] border border-[#46d993] 
             rounded-full p-2 hover:bg-[#46d993] hover:text-white cursor-pointer transition duration-300" />
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
