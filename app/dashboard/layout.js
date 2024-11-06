"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";
import NetworkInstance from "../api/NetworkInstance";

export default function Layout({ children }) {
  const networkInstance = NetworkInstance();
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true); // Start loading
    try {
      const response = await networkInstance.get(
        `/api/proxy/land-application`,
        {
          params: { cOfONumber: query },
        }
      );
      console.log("Response data:", response.data);

      // Simulate a 2-second delay
      setTimeout(() => {
        setSearchResult(response.data.data); // Set the search result after delay
        setLoading(false); // Stop loading after 2 seconds
      }, 2000);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  useEffect(() => {
    if (searchResult) {
      console.log("Search result updated:", searchResult);
    }
  }, [searchResult]);

  return (
    <div className="flex flex-col h-screen">
      <TopNav onSearch={handleSearch} className="w-full" />
      <div className="flex flex-grow">
        <SideNav className="w-1/4 lg:w-1/5 bg-gray-800 " />
        <div className="flex-grow p-6 overflow-y-auto">
          {loading ? (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="animate-spin rounded-full border-t-4 border-b-4 border-s-2 border-e-2 border-green-600 h-16 w-16"></div>
            </div>
          ) : (
            <Result searchResult={searchResult} />
          )}
        </div>
      </div>
    </div>
  );
}
