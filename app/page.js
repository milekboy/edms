"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const users = [
  { email: "tijaniwahab@gmail.com", password: "password123" },
  { email: "emmanuel@gmail.com", password: "admin123" },
  { email: "nigeria@gmail.com", password: "nigeria123" },
  // Add more user objects as needed
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);

    // Verify user credentials locally
    const user = users.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );

    if (user) {
      localStorage.setItem("profileJWT", "fake-jwt-token"); // Use a dummy token
      setTimeout(() => {
        // Navigate to the dashboard after 5 seconds
        window.location.href = "/dashboard";
      }, 3000); // 5000 milliseconds = 5 seconds
    } else {
      // Set error message and delay for 5 seconds before hiding the loading state
      setTimeout(() => {
        setLoading(false);
        setError("Invalid email or password.");
        setTimeout(() => {
          setError(null);
        }, 3000);
      }, 5000); // Show error after 5 seconds
    }
  };

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-s-2 border-e-2 border-green-600 h-16 w-16"></div>
        </div>
      )}
      <div className="lg:flex w-full">
        <div className="ps-72 pt-44 w-[70%]">
          <h1 className="font-bold text-4xl tracking-wide">Welcome 👋</h1>
          <p className="mt-5 w-[400px] tracking-wide text-xl">
            Today is a new day. It&apos;s your day. Shape it. Sign in to start
            managing your property.
          </p>
          <form onSubmit={signIn}>
            <div className="w-2 mt-8">
              <p className="font-semibold tracking-wide">Email</p>
              <input
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email"
                className="mt-2 h-12 w-full lg:w-[470px] z-0 transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3"
              />
              <p className="font-semibold tracking-wide mt-4">Password</p>
              <input
                onChange={handleInputChange}
                id="password"
                placeholder="**********"
                className="h-12 mt-2 w-full lg:w-[470px] z-0 transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3"
                type="password"
              />
            </div>
            <Link href="/reset">
              <p className="mt-2 ms-80 text-base font-semibold cursor-pointer text-green-600">
                Forgot Password?
              </p>
            </Link>

            {error && (
              <div>
                <p className="text-red-500">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="bg-green-600 text-white w-full lg:w-[462px] h-14 text-2xl mt-4 rounded-xl"
            >
              Login
            </button>
            <div className="w-full gap-4 mt-4 items-center flex">
              <div className="h-[1px] w-[200px] bg-[#D6DADD]"></div>
              <p className="font-normal text-[#A39F9F] text-sm">OR</p>
              <div className="h-[1px] w-[200px] bg-[#D6DADD]"></div>
            </div>
            <button className="lg:w-[462px] w-full mt-4 h-14 rounded-xl border-2 p-[10px] gap-[10px] justify-center items-center flex">
              <span className="text-lg">
                <FcGoogle />
              </span>
              <span className="font-semibold text-base leading-5">
                Sign in with Google
              </span>
            </button>
          </form>

          <Link href="/signup">
            <p className="mt-4 text-sm font-semibold text-gray-500 ms-32">
              Don&apos;t have an account?
              <span className="text-green-600 cursor-pointer"> sign up</span>
            </p>
          </Link>
        </div>
        <div className="h-screen right-0 fixed w-[30%]">
          <Image
            width="800"
            height="800"
            src={
              "https://res.cloudinary.com/dbpjskran/image/upload/v1730660906/image_3_mquqft.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
