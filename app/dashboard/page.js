import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="mt-32 ms-40">
      <div className=" text-green-600 font-bold ps-7">Dashboard</div>
      <div className="w-full h-screen flex justify-center mt-32">
        <div>
          <Image
            src="https://res.cloudinary.com/dbpjskran/image/upload/v1730574073/Search_More_kzim6q.png"
            height="100"
            width="200"
            alt="success"
          />
          <p className="font-semibold text-center">Input your C of O</p>
        </div>
      </div>
    </div>
  );
}
