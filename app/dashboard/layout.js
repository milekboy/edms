"use client";
// import { useState } from "react";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";

export default function Layout({ children }) {
  const data = [
    {
      cofo: "00-00-000",
      ownerName: "Tayo Olasukanmi",
      description: "2 plots",

      dues: "Yes",
      date: "July 8, 2024",

      period: "3 Years",
      years: "1 Year",
      spn: "897-997-566",
      use: "Residential",
      price: "₦16,461.22",
      pAddress: "Plot 34, Admiralty Way, Lekki Phase 1, Lekki, Lagos State",
      oAddress: "No. 22, Agbani Road, Independence Layout, Enugu, Enugu State",
    },
    {
      cofo: "01-23-456",
      ownerName: "Chisom Obi",
      description: "10 plots",

      spn: "776-246-864",
      dues: "No",
      date: "October 25, 2023",

      period: "6 Years",
      years: "4 Years",
      use: "Filling station",
      price: "₦16,461.22",
      pAddress: "House 15, Zone B, Apo Resettlement Estate, Apo, Abuja, FCT",
      oAddress: "7 Ogunlana Drive, Surulere, Lagos, Lagos State",
    },
    {
      cofo: "02-34-567",
      ownerName: "Yamal Bako",
      description: "1 acre ",

      dues: "Yes",
      date: "March 12, 2022",

      spn: "890-753-096",
      period: "8 Years",
      years: "4 Years",
      use: "Residential",
      price: "₦16,461.22",
      pAddress: "Plot 10, New GRA, Ede Road, Ile-Ife, Osun State",
      oAddress: "No. 9, Okpanam Road, Asaba, Delta State",
    },
  ];

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (query) => {
    const result = data.find((item) => item.cofo === query);
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
