"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";
import NetworkInstance from "../api/NetworkInstance";

export default function Layout({ children }) {
  const networkInstance = NetworkInstance();
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await networkInstance.get(
        `api/land-application/search`,
        {
          params: { cOfONumber: query },
        }
      );
      console.log("Response data:", response.data);
      setSearchResult(response.data.data); // Set the search result from API response
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // Log searchResult whenever it changes
  useEffect(() => {
    if (searchResult) {
      console.log("Search result updated:", searchResult);
      // console.log("Applicant Name:", searchResult.data.applicantName);
    }
  }, [searchResult]);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation with search handler */}
      <TopNav onSearch={handleSearch} className="w-full" />

      {/* Content Wrapper */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <SideNav className="w-1/4 lg:w-1/5 bg-gray-800 " />

        {/* Main Content, passing searchResult as a prop directly */}
        <div className="flex-grow p-6 overflow-y-auto">
          <Result searchResult={searchResult} />
        </div>
      </div>
    </div>
  );
}
