import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Index(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a city");

  const options = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className="App min-h-screen flex flex-col items-center pt-20"
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <div className="text-xl text-white font-black">Custom Select</div>
      <div className="relative inline-block w-80 mt-4">
        <div
          className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          onClick={toggleDropdown}
        >
          {selectedOption}
        </div>
        {isOpen && (
          <div className="absolute mt-1  bg-white shadow-lg  border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            {options.map((option, index) => (
              <div
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-800 break-all rounded"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="absolute left-5 top-5 p-2 bg-gray-800 shadow-2xl rounded text-white font-bold text-sm cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Custom Form
      </div>
    </div>
  );
}

export default Index;
