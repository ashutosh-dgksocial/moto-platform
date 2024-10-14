import React from "react";

const AppHeader: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
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
          <nav className="hidden space-x-6 md:flex">
            <a href="#" className="text-gray-600 hover:text-green-500">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              New Car
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              Used Car
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              Pages
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              Contact Us
            </a>
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

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-between space-y-8 px-6 py-16 md:flex-row md:space-y-0">
        {/* Text */}
        <div className="w-full space-y-4 md:w-2/3">
          <p className="text-lg font-medium text-green-500">Fastest Speed</p>
          <h2 className="text-5xl font-bold">
            The Best Way To Buy <br /> Your Dream Car.
          </h2>
          <p className="text-gray-500">
            Car dealerships may sell new cars from one or several manufacturers,
            as well as used cars from a variety of sources.
          </p>
          <div className="flex space-x-4">
            <img src="https://via.placeholder.com/100" alt="Trustpilot" />
            <img src="https://via.placeholder.com/100" alt="Google" />
          </div>
        </div>

        {/* Search Panel */}
        <div className="w-full rounded-lg bg-white p-6 shadow-lg md:w-1/3">
          <h3 className="mb-4 text-2xl font-semibold">
            Find Your Dream Vehicle
          </h3>
          <div className="mb-4 flex justify-between">
            <button className="mx-1 flex-1 rounded-md border-2 border-green-500 py-2 text-green-500">
              Brand New
            </button>
            <button className="mx-1 flex-1 rounded-md border-2 border-gray-300 py-2 text-gray-500">
              Used Car
            </button>
            <button className="mx-1 flex-1 rounded-md border-2 border-gray-300 py-2 text-gray-500">
              Auction
            </button>
          </div>

          {/* Budget Selection */}
          <div className="mb-4 space-y-4">
            <div>
              <label htmlFor="minBudget" className="block text-gray-500">
                Min Budget*
              </label>
              <input
                id="minBudget"
                type="number"
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2"
                placeholder="Min Budget"
              />
            </div>

            <div>
              <label htmlFor="maxBudget" className="block text-gray-500">
                Max Budget*
              </label>
              <input
                id="maxBudget"
                type="number"
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2"
                placeholder="Max Budget"
              />
            </div>
          </div>

          {/* Brand Selection */}
          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-500">
              Select Brand*
            </label>
            <select
              id="brand"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-2"
            >
              <option>Select Brand</option>
              <option>Toyota</option>
              <option>Ford</option>
              <option>BMW</option>
              <option>Mercedes</option>
            </select>
          </div>

          <button className="w-full rounded-md bg-green-500 py-3 text-white">
            Search 22 Vehicles
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppHeader;
