"use client";
// import { useState } from "react";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";

export default function Layout({ children }) {
  const data = [
    {
      pocNumber: "012345678",
      ownerName: "Tayo Olasukanmi",
      description: "2 plots of land in Enugu",
      value: "₦10m",
      dues: "Yes",
      lease: "Acquired",
      years: "3",
      use: "Residential",
    },
    {
      pocNumber: "012345679",
      ownerName: "Chisom Obi",
      description: "10 plots of land in Kaduna",
      value: "₦20m",
      dues: "No",
      lease: "None",
      years: "6",
      use: "Filling station",
    },
    {
      pocNumber: "012345677",
      ownerName: "Yamal Bako",
      description: "1 acre of land in Lagos",
      value: "₦30m",
      dues: "Yes",
      lease: "None",
      years: "8",
      use: "Residential",
    },
  ];

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (query) => {
    const result = data.find((item) => item.pocNumber === query);
    setSearchResult(result);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation with search handler */}
      <TopNav onSearch={handleSearch} className="w-full" />

      {/* Content Wrapper */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <SideNav className="w-1/4 lg:w-1/5 bg-gray-800 " />

        {/* Main Content, passing searchResult as a prop to children */}
        <div className="flex-grow p-6 overflow-y-auto">
          {/* {React.cloneElement(children, { searchResult })} */}
          {React.cloneElement(<Result />, { searchResult })}
        </div>
      </div>
    </div>
  );
}
