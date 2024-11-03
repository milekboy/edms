"use client";
import Script from "next/script";
export default function Details() {
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
  return (
    <div className="mt-32 ms-[15%]">
      <Script
        src="https://remitademo.net/payment/v1/remita-pay-inline.bundle.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Remita script loaded successfully")}
      />
      <div className="w-[100%] h-full rounded-lg shadow-lg relative flex px-4 py-4 items-center">
        <div>
          <h1 className="font-bold text-xl">Enter your details</h1>
          <p className="text-sm text-gray-400">
            They are your personal details
          </p>
          <div id="date" className="flex mt-5 space-x-4 w-[100%]">
            <div className="w-[500px] space-y-4">
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 1</p>
                <input
                  placeholder="Item 1"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 3</p>
                <input
                  placeholder="Item 3"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 5</p>
                <input
                  placeholder="Item 5"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 7</p>
                <input
                  placeholder="Item 7"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
            </div>
            <div className="w-[500px] space-y-4 pe-4">
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 2</p>
                <input
                  placeholder="Item 2"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 4</p>
                <input
                  placeholder="Item 4"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 6</p>
                <input
                  placeholder="Item 6"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold">Item 8</p>
                <input
                  placeholder="Item 8"
                  className="focus:outline-none h-12 border-2 rounded-lg w-full px-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={makePayment} className="flex w-full justify-center mt-6">
        <button className="lg:bg-green-600  rounded-md  text-white font-semibold hover:text-white py-2 px-4 border-2 border-white w-80 flex justify-center ">
          Pay Now
        </button>
      </div>
    </div>
  );
}
