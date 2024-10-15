import { IoIosSearch } from "react-icons/io";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import { FaCar } from "react-icons/fa";
// import { Link } from "react-router-dom";
import {
  IoBagCheckOutline,
  IoPricetagsOutline,
  IoSearch,
} from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Hamburger from "../../components/Hamburger/Hamburger";

const AppHeader = () => {
  return (
    <header className="bg-white">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="mr-1 flex items-center space-x-2 md:mr-6">
          <div>
            <FaCar className="h-10 w-10 md:h-20 md:w-20" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold leading-9 md:text-4xl">Drivco</h1>
            <p className="text-[9px] italic">AUTOMOTIVE CAR DEALER</p>
          </div>
        </div>
        {/* Navigation */}
        <div className="hidden bg-white md:flex md:w-[29rem]">
          <label className="flex h-[48px] w-full cursor-pointer items-center justify-between rounded-[4px] border border-slate-200 bg-[white] px-4 py-2 pr-0 text-sm leading-5 text-slate-400 shadow-sm transition duration-300 focus-within:border-slate-400 focus-within:shadow hover:border-slate-300">
            <input
              type="text"
              placeholder="Search your products"
              className="w-full border-0 bg-[white] px-3 text-gray-600 focus:bg-white focus:outline-none focus:ring-0"
            />
            <ButtonSecondary className="ml-2 flex h-[auto] w-[65px] items-center justify-center rounded-[4px] rounded-l-none bg-[#2b2a2a] font-semibold text-white md:h-[48px]">
              <IoSearch size={18} />
            </ButtonSecondary>
          </label>
        </div>
        {/* Right actions */}
        <div className="ml-4 flex items-center space-x-5">
          <p className="hidden items-center text-sm font-medium lg:flex">
            <IoPricetagsOutline size={18} className="text-[#58d992dc]" />
            <span className="ml-1 text-nowrap">SELL WITH US</span>
          </p>
          <p className="hidden items-center text-sm font-medium md:flex lg:flex">
            <CiHeart size={20} className="text-[#58d992dc]" />
            <span className="ml-1">SAVE</span>
          </p>
          <ButtonSecondary className="hidden items-center text-nowrap rounded-[4px] bg-[#58d993] px-4 py-2 text-sm text-black md:flex lg:flex">
            <CgProfile size={20} className="text-[#454545] lg:flex" />
            <span className="ml-1 text-[12px] font-semibold lg:text-[16px]">
              SIGN UP
            </span>
          </ButtonSecondary>
          {/* Custom size using Tailwind classes */}

          <a
            href="#"
            className="flex cursor-pointer items-center duration-200 hover:text-[#58d992dc] md:hidden"
          >
            <IoBagCheckOutline />
            <span className="ml-1 text-nowrap font-semibold">Cart (0)</span>

            <div className="ml-2">
              <Hamburger />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
