"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";
import NetworkInstance from "../api/NetworkInstance";
import { ImCancelCircle } from "react-icons/im";
export default function Layout({ children }) {
  const networkInstance = NetworkInstance();
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) {
      console.error("Query parameter is required.");
      return;
    }

    setLoading(true);
    try {
      const response = await networkInstance.get(
        "/api/land-application/search",
        {
          params: { cOfONumber: query },
        }
      );
      console.log("Response data:", response.data);

      setTimeout(() => {
        setSearchResult(response.data.data);
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }, 2000);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("No C of O match found.");
      } else {
        setError("No C of O match found.");
      }
      setLoading(false);
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
            <>
              <Result searchResult={searchResult} />
              {error && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 z-20 bg-white shadow-xl flex justify-center items-center w-96 h-20">
                  <div>
                    <div className="h-6 border-b-2 right-0  pointer text-black">
                      <ImCancelCircle
                        onClick={() => setError(null)}
                        className="right-0 absolute me-4 cursor-pointer"
                      />
                    </div>
                    <p>{error}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
