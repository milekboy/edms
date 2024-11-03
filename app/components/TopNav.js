"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function TopNav({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;

    // If the input is empty, reset
    if (!value) {
      setInput("");
      return;
    }

    // Check if the user is backspacing or deleting
    if (value.length < input.length) {
      // Handle backspace or delete
      const newValue = value.replace(/\D/g, "");
      setInput(
        newValue.replace(/(\d{2})(\d{2})(\d{0,3})/, "$1-$2-$3").slice(0, 10)
      );
      return;
    }

    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format the digits into "00-00-000"
    let formattedValue = "";

    for (let i = 0; i < digits.length; i++) {
      formattedValue += digits[i];
      // Add dashes after the second and fourth digits
      if (i === 1 || i === 3) {
        formattedValue += "-";
      }
    }

    setInput(formattedValue);
  };

  const handleKeyDown = (e) => {
    // Allow backspace and delete keys to function normally
    if (e.key === "Backspace" || e.key === "Delete") {
      return;
    }
  };

  const handleSearchClick = () => {
    onSearch(input); // Call the search function with the current input value
  };

  return (
    <div className="w-[87%] h-32 top-0 fixed flex items-center justify-center bg-white right-0 ps-12">
      <div className="flex gap-4 bg-white">
        <div className="bg-white">
          <p className="font-semibold">Hello, Lekan</p>
          <p className="text-sm">Have a nice day</p>
        </div>
        <div className="flex border-2 w-[500px] ms-20 rounded-xl">
          <div className="w-[10%] flex justify-center items-center h-full">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="00-00-000"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            className="w-[85%] focus:outline-none"
            maxLength={9} // Maximum length to accommodate "00-00-000"
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
        <p className="font-semibold mt-2">Lekan Okeowo</p>
      </div>
    </div>
  );
}
