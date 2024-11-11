import Image from "next/image";
export default function NoRecord() {
  return (
    <div className="mt-32 ms-40">
      <div className=" text-green-600 font-bold ps-7">Dashboard</div>
      <div className="w-full h-screen flex justify-center mt-32">
        <div>
          <Image
            src="https://res.cloudinary.com/dbpjskran/image/upload/v1730574741/Nothing_Found_2x_bck99d.png"
            height="100"
            width="200"
            alt="success"
          />
          <p className="font-semibold text-center">Input Your C Of O</p>
        </div>
      </div>
    </div>
  );
}
