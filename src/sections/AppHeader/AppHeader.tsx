import { IoIosSearch } from "react-icons/io";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import { FaCar } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { IoPricetagsOutline, IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const AppHeader = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div>
            <FaCar size={50} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold leading-9">Drivco</h1>
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
            <button className="ml-2 flex h-[auto] w-[65px] items-center justify-center rounded-[4px] rounded-l-none bg-[#2b2a2a] font-semibold text-white md:h-[48px]">
              <IoSearch size={18} />
            </button>
          </label>
        </div>
        {/* Right actions */}
        <div className="flex items-center space-x-5">
          <p className="hidden items-center text-sm font-medium lg:flex">
            <IoPricetagsOutline size={18} className="text-[#58d992dc]" />
            <span className="ml-1">SELL WITH US</span>
          </p>
          <p className="flex items-center text-sm font-medium">
            <CiHeart size={20} className="text-[#58d992dc]" />
            <span className="ml-1">SAVE</span>
          </p>
          <button className="flex items-center text-nowrap rounded-[4px] bg-[#58d993] px-4 py-2 text-sm text-black">
            <CgProfile size={20} className="hidden text-[#454545] lg:flex" />
            <span className="ml-1 text-[12px] font-semibold lg:text-[16px]">
              SIGN UP
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
