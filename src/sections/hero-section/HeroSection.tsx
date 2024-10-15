import { AiFillStar } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import { FaGoogle, FaStar } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #caeadfc9 18%, #f8f3fa 35%)",
      }}
    >
      <section className="mx-auto flex max-w-screen-2xl flex-col items-start justify-center space-y-8 px-4 py-10 md:flex-row md:space-y-0 md:py-16">
        {/* Left Panel */}
        <div className="w-full space-y-4 md:w-[50%] mt-20">
          <p className="flex items-center gap-2 text-lg font-medium text-green-500">
            <span>Fastest Speed </span>
            <BsSpeedometer size={25} />
          </p>
          <h2 className="text-left text-3xl font-bold leading-[67px] md:text-[60px]">
            The Best Way Buy
            <br />
            Dream Car.
          </h2>
          <p className="w-[70%] text-left text-xl text-gray-500">
            Car dealerships may sell new cars from one or several manufacturers,
            as well as used cars from a variety of sources.
          </p>

          {/* Trust rating */}
          <div className="flex flex-col items-center justify-start p-6 md:flex-row">
            {/* Trustpilot Section */}
            <div className="mx-4 mb-4 flex flex-col text-center md:mb-0">
              <div className="mb-2 flex items-center justify-center">
                <AiFillStar className="mr-2 text-2xl text-green-500" />
                <span className="text-lg font-bold">Trustpilot</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2 text-lg">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} className="text-green-500" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-600">2348 Reviews</span>
            </div>

            {/* Divider */}
            <div className="mx-8 hidden h-12 w-px bg-gray-300 md:block" />

            {/* Google Section */}
            <div className="mx-4 flex flex-col text-center">
              <div className="mb-2 flex items-center justify-center">
                <FaGoogle className="mr-2 text-2xl text-blue-500" />
                <span className="text-lg font-bold">Google</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2 text-lg">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-600">2348 Reviews</span>
            </div>
          </div>
        </div>

        {/* Search Panel */}
        <div className="w-full rounded-lg bg-white px-8 py-10 shadow-md md:w-[35%]">
          <h1 className="mb-6 text-3xl font-bold">Find Your Dream Vehicle</h1>
          {/* Search Options */}

          <div className="mb-4 flex justify-start gap-2 py-4">
            <button className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gray-100 text-center transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg focus:bg-[#58d993] focus:text-white">
              <LiaCarSideSolid className="text-3xl text-gray-600 focus:text-white" />
              <span className="mt-2">Brand New</span>
            </button>
            <button className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gray-100 text-center transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg focus:bg-[#58d993] focus:text-white">
              <LiaCarSideSolid className="text-3xl text-gray-600" />
              <span className="mt-2">Used Car</span>
            </button>
          </div>

          {/* Budget Selection */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Select Budget*
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Budget"
                className="w-[100%] flex-grow rounded-[3px] bg-gray-100 px-3 py-3 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Max Budget"
                className="w-[100%] flex-grow rounded-[3px] bg-gray-100 px-3 py-3 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Brand Selection */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Select Brand*
            </label>
            <select className="block w-full rounded-[3px] bg-gray-100 p-2 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Brand</option>
              <option>Brand 1</option>
              <option>Brand 2</option>
              <option>Brand 3</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="w-full rounded bg-[#58d993] py-3 font-semibold text-[#000000e1] hover:bg-[#41b374] hover:duration-300">
            SEARCH 22 VEHICLES
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
