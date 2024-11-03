import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { IoExitSharp } from "react-icons/io5";
export default function SideNav() {
  return (
    <div className="h-full w-[13%] fixed border-r-2 border-gray-100 flex ps-7 pt-10 ">
      <div className="space-y-4">
        <h1 className="text-green-600 font-semibold cursor-pointer">EDMS</h1>
        <p className="tracking-wider text-sm">MENU</p>
        <Link href="/dashboard">
          <button className="lg:bg-green-600  rounded-md  text-white font-semibold hover:text-white py-2 px-4 border-2 border-white w-32 flex gap-2 mt-4">
            <IoHome className="mt-1" />
            Overview
          </button>
        </Link>
        <Link href="/">
          <div className="bottom-0 absolute pb-10 font-semibold gap-2 flex">
            {" "}
            <IoExitSharp className="mt-1 " />
            <span>Log Out</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
