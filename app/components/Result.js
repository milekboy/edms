"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";
export default function Result({ searchResult }) {
  const [message, setMessage] = useState("Input your C of O");
  useEffect(() => {
    if (!searchResult) {
      setMessage("No results found, please try again.");
    } else {
      setMessage("Input your C of O"); // Reset message if there's a valid search result
    }
  }, [searchResult]);

  function makePayment() {
    var form = document.querySelector("#payment-form");
    var paymentEngine = RmPaymentEngine.init({
      key: "QzAwMDA0MDM2MTh8MTEwMDI1NTgzNzAzfDhkOThmNmZkOWZjOTFhNTg3NGE0NTdmMjcwY2RjZGRlNjJhNzVlMzY1NDYxYTgzMzQ4NWM2YTBjZDYwYmU4NzcwNTVlNzE5MzQzZWQ0MmQ3ZGE4OTg3NmYzMjViOTU1MjdhMjI2Y2I1NmYwMzgyZDc0NmJiNWUyNTljMjkwMWUy",
      transactionId: Math.floor(Math.random() * 1101233), // Replace with a reference you generated or remove the entire field for us to auto-generate a reference for you. Note that you will be able to check the status of this transaction using this transaction Id
      customerId: "39832",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@mailinator.com",
      amount: 15000,
      narration: "Essential Walking Shoes",
      onSuccess: function (response) {
        console.log("callback Successful Response", response);
      },
      onError: function (response) {
        console.log("callback Error Response", response);
      },
      onClose: function () {
        console.log("closed");
      },
    });
    paymentEngine.showPaymentWidget();
  }
  var yearsOwned = 0; // Default value in case searchResult is not available
  if (searchResult && searchResult.completionDate) {
    yearsOwned =
      new Date().getFullYear() -
      new Date(searchResult.completionDate).getFullYear();
    if (yearsOwned === 0) {
      yearsOwned = 1;
    }
  }

  return (
    <div>
      {!searchResult ? (
        <div className="mt-32 ms-40">
          <div className=" text-green-600 font-bold ps-16">Dashboard</div>
          <div className="w-full h-screen flex justify-center mt-32">
            <div>
              <Image
                src="https://res.cloudinary.com/dbpjskran/image/upload/v1730574073/Search_More_kzim6q.png"
                height="100"
                width="200"
                alt="success"
              />
              <p className="font-semibold text-center">{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-32 ms-[15%]">
          <Script
            src="https://remitademo.net/payment/v1/remita-pay-inline.bundle.js"
            strategy="lazyOnload"
            onLoad={() => console.log("Remita script loaded successfully")}
          />
          <div className="w-[85%] -z-10 h-full rounded-lg shadow-lg relative pt-10 flex px-8 py-4 pb-16  items-center">
            <div>
              <h1 className="font-bold text-xl">Enter your details</h1>
              <p className="text-sm text-gray-400">
                They are your personal details
              </p>
              <div id="date" className="flex mt-5 space-x-4 w-[100%]">
                <div className="w-[400px] space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Owner&apos;s Name
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.applicantName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Owner&apos;s Address
                    </p>

                    <div className=" h-auto border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.applicantAddress}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Commencement Date
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.completionDate}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Rent Revision Period
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">1 Year(s)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Years Owned
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">{yearsOwned} Year(s)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Survey Plan Number
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.surveyPlanNo}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[400px]  space-y-4 pe-4">
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Property Address
                    </p>

                    <div className=" h-auto border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.applicantAddress}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Use of Property
                    </p>

                    <div className=" h-auto border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">Residential</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Annual Ground Rent (AGR)
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold"> ₦16,461.22</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      C of O Number
                    </p>

                    <div className=" h-12 border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.cofoNumber}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">
                      Description
                    </p>

                    <div className=" h-auto border-2 rounded-lg w-full px-3">
                      <p className="mt-2 font-semibold">
                        {searchResult.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={makePayment}
            className="flex w-full justify-center mt-6"
          >
            <button className="lg:bg-green-600  rounded-md  text-white font-semibold hover:text-white py-5 px-4 border-2 border-white w-80 flex justify-center mt-20">
              Pay ₦{(16461.22 * Number(yearsOwned)).toLocaleString()} Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
