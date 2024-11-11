"use client";
import { jsPDF } from "jspdf";
import Link from "next/link";
import Image from "next/image";

export default function PaymentSuccess() {
  const endOfYear = new Date(new Date().getFullYear(), 11, 31);
  const validityDate = endOfYear.toLocaleDateString();
  const currentDate = new Date().toLocaleDateString();
  const generateReceipt = () => {
    const doc = new jsPDF();
    const logo =
      "https://res.cloudinary.com/dbpjskran/image/upload/v1730672653/image_18_3x_i7aj3n.png";
    doc.addImage(logo, "JPEG", 10, 10, 10, 10);
    doc.text("Certificate of payment", 20, 20);
    doc.text(`Date Of Payment: ${currentDate}`, 20, 30);
    doc.text("Amount: #16,461.22", 20, 40);
    doc.text(`Valid Until: ${validityDate}`, 20, 50);
    doc.save("receipt.pdf");
  };
  return (
    <div>
      <div className="lg:flex w-full">
        <div className="w-[70%] flex flex-col items-center pt-44 space-y-4">
          <Image
            src="https://res.cloudinary.com/dbpjskran/image/upload/v1730560969/Frame_18_imquru.png"
            height="100"
            width="200"
            alt="success"
          />
          <h1 className="font-bold text-4xl tracking-wide ">Success!</h1>
          <p className="mt-5 tracking-wide text-center text-xl">
            Payment Successful
          </p>
          <button
            onClick={generateReceipt}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download Certificate
          </button>
          <Link href="/dashboard">
            <button className="bg-green-600 text-white w-full lg:w-[462px] h-14 text-2xl rounded-xl">
              Back to dashboard
            </button>
          </Link>
        </div>
        <div className="h-screen right-0 fixed w-[30%]">
          <Image
            width="800"
            height="800"
            src={
              "https://res.cloudinary.com/dbpjskran/image/upload/v1730660906/image_3_mquqft.png"
            }
            alt="background"
          />
        </div>
      </div>
    </div>
  );
}
