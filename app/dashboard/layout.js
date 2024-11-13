"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Result from "../components/Result";
import Image from "next/image";
import NetworkInstance from "../api/NetworkInstance";
import { IoWarning } from "react-icons/io5";

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
        setError("Incorrect C of O.");
      } else {
        setError("Incorrect C of O.");
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
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl flex flex-col justify-center items-center w-96 h-72 space-y-5 rounded-xl">
                    <div className="bg-[#FF623D] h-14 w-14 rounded-lg  flex justify-center items-center">
                      <IoWarning className=" text-white text-5xl" />
                    </div>
                    <p className="text-[#29374B] font-semibold text-3xl">
                      Error
                    </p>
                    <p className="text-[#5E749D]">{error}</p>
                    <button
                      onClick={() => {
                        setError(null);
                      }}
                      className="bg-[#FF623D]  rounded-xl  text-white font-semibold hover:text-white py-3 px-4   w-80 flex justify-center "
                    >
                      Cancel
                    </button>
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
