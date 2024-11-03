"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
  // const networkInstance = NetworkInstance();
  // const navigate = useNavigate();
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
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await networkInstance.post(`/api/auth/login`, {
        email: email.toLowerCase(),
        password: password,
      });

      if (response?.status === 200 || response?.status === 201) {
        const { access_token } = response.data;
        if (access_token) {
          localStorage.setItem("prodileJWT", access_token);
        } else {
          localStorage.removeItem("prodileJWT");
        }
        setTimeout(() => {
          navigate("/dashboard/overview");
        }, 1000);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div>
      <div className=" lg:flex w-full">
        <div className=" ps-72 pt-36 w-[70%]">
          <h1 className="font-bold text-4xl tracking-wide">Welcome 👋</h1>
          <p className="mt-5 w-[400px] tracking-wide text-xl">
            Welcome back! Please enter your details
          </p>
          <form onSubmit={signIn}>
            <div className="w-full mt-8">
              <p className="font-semibold tracking-wide">Full name</p>
              <input
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter your name"
                className="mt-2 h-12  w-full lg:w-[470px] z-0  transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3 "
              />
              <p className="font-semibold tracking-wide mt-4 ">Email Address</p>
              <input
                onChange={(e) => handleInputChange(e)}
                id="email"
                placeholder="Enter your email address"
                className=" h-12 mt-2 w-full lg:w-[470px] z-0transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3 "
              />
              <p className="font-semibold tracking-wide mt-4">Password</p>
              <input
                onChange={(e) => handleInputChange(e)}
                id="password"
                placeholder="**********"
                className=" h-12 mt-2 w-full lg:w-[470px] z-0transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3 "
              />
              <p className="font-semibold tracking-wide mt-4">
                Confirm Password
              </p>
              <input
                onChange={(e) => handleInputChange(e)}
                id="password"
                placeholder="**********"
                className=" h-12 mt-2 w-full lg:w-[470px] z-0transition ease-in-out border-2 rounded-2xl border-zinc-300 ps-3 "
              />
            </div>

            {error && (
              <div>
                <p className="text-red-500">{error}</p>
              </div>
            )}
            <button className="bg-green-600 text-white w-full lg:w-[462px] h-14   text-2xl mt-4 rounded-xl">
              Sign up
            </button>

            <div className="w-full gap-4 mt-4 items-center flex ">
              <div className="h-[1px] w-[200px] bg-[#D6DADD]"></div>
              <p className="font-normal text-[#A39F9F] text-sm">OR</p>
              <div className="h-[1px] w-[200px] bg-[#D6DADD]"></div>
            </div>
            <button className="lg:w-[462px] w-full mt-4 h-14   rounded-xl border-2 p-[10px] gap-[10px]  justify-center items-center flex ">
              <span className="text-lg">
                <FcGoogle />
              </span>{" "}
              <span className="font-semibold text-base leading-5">
                Sign up with Google
              </span>
            </button>
          </form>
          <Link href="/">
            <p className="mt-4 text-sm font-semibold text-gray-500 ms-32">
              Already have an account?
              <span className="text-green-600 cursor-pointer ms-1">
                Login
              </span>{" "}
            </p>
          </Link>
        </div>
        <div className="h-screen  right-0 fixed w-[30%]">
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
