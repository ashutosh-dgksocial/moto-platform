import { IoIosSearch } from "react-icons/io";

const AppHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-semibold">Drivco</h1>
          <p className="text-sm italic">AUTOMOTIVE CAR DEALER</p>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex">
          <div className="flex h-[50px] items-center justify-between rounded-[3px] border border-slate-200 bg-transparent px-4 py-2 text-sm leading-5 text-slate-400 shadow-sm transition duration-300 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none md:h-[72px]">
            <div>
              <IoIosSearch size={30} className="font-semibold text-[#8BB239]" />
            </div>
            <div className="flex flex-grow items-center">
              <input
                type="text"
                placeholder="Enter your question or keyword"
                className="w-full rounded-lg border-0 p-3 focus:outline-none focus:ring-0"
              />
              <button className="ml-2 h-[35px] w-[100px] rounded-[3px] bg-[#8BB239] p-2 px-6 text-[14px] font-semibold text-white md:h-[48px]">
                SEARCH
              </button>
            </div>
          </div>
        </nav>
        {/* Right actions */}
        <div className="flex items-center space-x-4">
          <button className="text-sm">Sell With Us</button>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
