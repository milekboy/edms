import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <TopNav className="w-full" />

      {/* Content Wrapper */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <SideNav className="w-1/4 lg:w-1/5 bg-gray-800 " />

        {/* Main Content */}
        <div className="flex-grow p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
