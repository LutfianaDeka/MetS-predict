import "../App.css";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <div className="nav-box fixed top-0 z-[9999] w-screen px-8 py-6 max-md:py-4 h-20 max-md:h-15">
        <nav className="flex items-center justify-between">
          <h1 className="text-white font-bold text-lg max-md:text-base cursor-pointer">
            MYMetSyn
          </h1>

          <ul className="list text-white hidden md:flex gap-10 text-sm md:gap-4 text-sm">
            <li>
              <a
                href="#home"
                className="relative group transition-all duration-300 hover:-translate-y-1"
              >
                <span className="hover:text-blue-950">Home</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[2px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            </li>
            <li>
              <a
                href="#intro"
                className="relative group transition-all duration-300 hover:-translate-y-1"
              >
                <span className="hover:text-blue-950">Introduction</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[2px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            </li>
            <li>
              <a
                href="#cek"
                className="relative group transition-all duration-300 hover:-translate-y-1"
              >
                <span className="hover:text-blue-950">Cek Kondisi</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[2px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            </li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="block md:hidden cursor-pointer"
          >
            <AlignJustify color="white" strokeWidth={2} />
          </button>
        </nav>
        {/* Hamburger Icon */}
      </div>
      {/* Overlay and Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay: klik di sini akan menutup sidebar */}
          <div
            className="fixed inset-0 bg-opacity-30 z-[9996]"
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <div
            className="md:hidden fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-[9998] transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()} // supaya klik dalam sidebar nggak nutup
          >
            <ul className="flex flex-col gap-1 text-sm pt-17 top-0 text-blue-950 ">
              <li>
                <a
                  href="#home"
                  className="block px-3 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                  onClick={closeSidebar}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#intro"
                  className="block px-3 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                  onClick={closeSidebar}
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#cek"
                  className=" block px-3 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                  onClick={closeSidebar}
                >
                  Cek Kondisi
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
