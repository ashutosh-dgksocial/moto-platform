import React from "react";
import { FaCar, FaGavel, FaPhone, FaTag } from "react-icons/fa";

type Props = {};

const ExploreOption = (props: Props) => {
  return (
    <div className="bg-black">
      <div className="mx-auto grid h-[100px] max-w-screen-2xl grid-cols-1 gap-6 bg-black py-5 pl-[1rem] text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pl-0">
        <div className="flex items-center border-b border-[#E4E7E9] pb-4 last:border-r-0 lg:justify-center lg:border-b-0 lg:border-r lg:pr-8">
          <FaCar className="text-[30px] text-gray-400" />
          <div className="ml-2 lg:ml-4">
            <h4 className="text-[12px] font-medium lg:text-[14px]">
              Browse Used a Car
            </h4>
            <p className="text-[12px] text-[#5F6C72] lg:text-[14px]">
              Find your dream car
            </p>
          </div>
        </div>

        <div className="flex items-center border-b border-[#E4E7E9] pb-4 last:border-r-0 lg:justify-center lg:border-b-0 lg:border-r lg:pr-8">
          <FaGavel className="text-[30px] text-gray-400" />
          <div className="ml-2 lg:ml-4">
            <h4 className="text-[12px] font-medium lg:text-[14px]">
              Auction Car
            </h4>
            <p className="text-[12px] text-[#5F6C72] lg:text-[14px]">
              Bid for the best deals
            </p>
          </div>
        </div>

        <div className="flex items-center border-b border-[#E4E7E9] pb-4 last:border-r-0 lg:justify-center lg:border-b-0 lg:border-r lg:pr-8">
          <FaTag className="text-[30px] text-gray-400" />
          <div className="ml-2 lg:ml-4">
            <h4 className="text-[12px] font-medium lg:text-[14px]">
              Browse Offer
            </h4>
            <p className="text-[12px] text-[#5F6C72] lg:text-[14px]">
              Check out our latest offers
            </p>
          </div>
        </div>

        <div className="flex items-center border-b border-[#E4E7E9] pb-4 last:border-r-0 lg:justify-center lg:border-b-0">
          <FaPhone className="text-[30px] text-gray-400" />
          <div className="ml-2 lg:ml-4">
            <h4 className="text-[12px] font-medium lg:text-[14px]">
              Get In Touch
            </h4>
            <p className="text-[12px] text-[#5F6C72] lg:text-[14px]">
              We're here to help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOption;
