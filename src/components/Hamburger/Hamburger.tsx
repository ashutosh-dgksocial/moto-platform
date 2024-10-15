import React, { useState } from "react";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-end justify-center gap-1"
    >
      {/* First span */}
      <span
        className={`block h-0.5 w-9 rounded-sm bg-gray-800 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }`}
      ></span>

      {/* Second span */}
      <span
        className={`my-0.5 block h-0.5 w-7 rounded-sm bg-gray-800 transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      {/* Third span */}
      <span
        className={`block h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-out ${
          isOpen ? "w-9 -translate-y-1 -rotate-45" : "w-5 translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
