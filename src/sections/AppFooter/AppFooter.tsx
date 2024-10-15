import { AiOutlineCar } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import {  FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { PiPhoneIncomingLight } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";



const AppFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* About Company Section */}
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">About Company</h3>
            <ul className="space-y-3 font-semibold text-[14px] text-[#b3b3b3]">
              <li>About Us</li>
              <li>Return & Exchange</li>
              <li>Refund Policy</li>
              <li>Reviews</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Search & Explore Section */}
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Search & Explore</h3>
            <ul className="space-y-3 font-semibold text-[14px] text-[#b3b3b3]">
              <li>Used Cars</li>
              <li>New Cars</li>
              <li>Auction Cars</li>
              <li>Sell My Car</li>
              <li>Shop Now</li>
            </ul>
          </div>
          {/* Cars By Brands Section */}
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Cars By Brands</h3>
            <ul className="space-y-3 font-semibold text-[14px] text-[#b3b3b3]">
              <li>BMW</li>
              <li>Ferrari</li>
              <li>Mercedes</li>
              <li>Suzuki</li>
              <li>TATA</li>
              <li>Toyota</li>
            </ul>
          </div>
          {/* Cars By Location Section */}
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Cars By Location</h3>
            <ul className="space-y-3 font-semibold text-[14px] text-[#b3b3b3]">
              <li>New Delhi</li>
              <li>Kualalumpur</li>
              <li>Panama City</li>
              <li>Sydney City</li>
              <li>Melbourne City</li>
            </ul>
          </div>
          {/* Download App Section */}
          <div>
            <h3 className="text-[20px] font-bold mb-4">Download App</h3>
            <div className="flex flex-col space-y-4">
              <img src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/google-app.svg" alt="Google Play" className="w-32" />
              <img src="https://drivco-wp.b-cdn.net/wp-content/uploads/2023/09/apple-app.svg" alt="App Store" className="w-32" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 pt-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
  {/* Logo and Name */}
  <div className="flex items-center justify-center md:justify-start col-span-1">
    <AiOutlineCar size={60} />
    <div className="flex flex-col  ml-2">
      <div className="uppercase text-[20px] font-bold">
        Moto-Platform
      </div>
      <div className="uppercase text-[12px]">
        Automotive car Dealer
      </div>
    </div>
  </div>

  {/* Contact Information */}
  <div className="flex items-center justify-center md:justify-start col-span-1">
  <PiPhoneIncomingLight size={40} color="#46D993" />
  {/* Horizontal line */}
  <div className="w-px h-10 bg-[#b3b3b3] mx-1"></div>
  <div className="flex flex-col ml-1">
    <div className="text-[14px] font-semibold text-[#b3b3b3]">
      To More Inquiry
    </div>
    <div className="uppercase text-[22px] text-[#46D993] font-semibold">
      +987-6543213
    </div>
  </div>
</div>


  {/* Social Media */}
  <div className="flex items-center justify-center md:justify-start col-span-1">
  <IoMailOpenOutline  size={40} color="#46D993" />
  {/* Horizontal line */}
  <div className="w-px h-10 bg-[#b3b3b3] mx-1"></div>
  <div className="flex flex-col ml-1">
    <div className="text-[14px] font-semibold text-[#b3b3b3]">
      To Send Mail
    </div>
    <div className=" text-[22px] text-[#46D993] font-semibold">
      info@gmail.com
    </div>
  </div>
</div>

  
  {/* Placeholder for the fourth section (custom content) */}
  <div className="flex items-center justify-center md:justify-start col-span-1 ">
    
  <div className="text-[16px] text-[#b3b3b3] font-semibold">
        Advertise With Us
    </div>
    <div className="text-[16px] ml-6 text-[#b3b3b3] font-semibold">
        Our Sitemap
    </div>
    </div>
   


</div>



<div className="border-t border-gray-700 mt-4">
    

<div className="flex flex-col sm:flex-row mt-4 justify-between items-center sm:items-start">
  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2 sm:mb-0">
    <div className="text-center sm:text-left">
      © 2024 <span className="text-[#46D993] ml-2">Moto-Platform</span>
    </div>
    <div className="w-px sm:mt-1 h-4 bg-[#b3b3b3] mx-2 hidden sm:block"></div>
    <div className="text-center sm:text-left">
      Design By <span className="text-[#46D993] ml-2">Egens Lab</span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center sm:items-start">
    <div className="text-[16px] font-semibold text-[#b3b3b3] mb-2 sm:mb-0 sm:mr-2">
      Follow Moto-Platform:
    </div>
    <div className="flex gap-2">
      <TiSocialFacebook size={20} color="#46D993" />
      <CiTwitter size={20} color="#46D993" />
      <FaLinkedinIn size={20} color="#46D993" />
      <FaInstagram size={20} color="#46D993" />
    </div>
  </div>
</div>


</div>


      </div>
    </footer>
  );
};

export default AppFooter;
