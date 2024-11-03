"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function TopNav({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(input); // Call the search function with the current input value
  };

  return (
    <div className="w-[87%] h-32 top-0 fixed flex items-center justify-cente right-0 ps-12 ">
      <div className="flex gap-4">
        <div>
          <p className="font-semibold ">Hello, Lekan</p>
          <p className="text-sm">Have a nice day</p>
        </div>
        <div className="flex border-2 w-[500px] ms-20 rounded-xl">
          <div className="w-[10%] flex justify-center items-center h-full">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Enter your poc..."
            value={input}
            onChange={handleInputChange}
            className="w-[85%] focus:outline-none"
          />
        </div>

        <button
          onClick={handleSearchClick} // Trigger search on button click
          className="lg:bg-green-600 rounded-md text-white font-semibold hover:text-white py-2 px-4 border-2 border-white w-32 flex gap-2"
        >
          <FaSearch className="mt-1 " />
          Search
        </button>

        <div className="h-12 w-[2px] bg-gray-400"></div>
        <CgProfile className="text-2xl mt-2" />
        <p className="font-semibold mt-2"> Lekan Okeowo</p>
      </div>
    </div>
  );
}
