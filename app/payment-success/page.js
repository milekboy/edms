"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewPassword() {
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
      <div className="lg:flex w-full">
        <div className="w-[70%] flex flex-col items-center pt-44 space-y-14">
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
