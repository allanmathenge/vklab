import React from "react"
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className="flex sm:h-[80px] items-end justify-center">
      <section className="w-full">
          {/* Navigation bar */}

          {/* Mobile nav */}
          <div className="flex sm:hidden">
            <MobileNav />
          </div>

        <div className="hidden sm:flex justify-between items-center shadow-md shadow-slate-400 rounded-full overflow-hidden p-1 gap-3 text-[#3c505f] ">
          <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white">Home</button>
          <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Chemical Library</button>
          <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Molecular Viewer</button>
          <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Docking Simulations</button>

          <div className="flex flex-1 min-w-16 items-center rounded-full overflow-hidden bg-white h-[32px] shadow-sm shadow-slate-400">
            <input type="text" className="border-blue-200 rounded-full text-[1rem] pl-2 h-full w-full focus:outline-blue-300" placeholder="Search ... "/>
            <div className="text-[32px] shadow-sm bg-white shadow-slate-400 cursor-pointer -ml-8 h-full flex items-center p-1"><CiSearch className="hover:text-blue-400 text-blue-200" /></div>
          </div>

          <button className="text-[32px] text-[#333] shadow-sm shadow-slate-400 rounded-full hover:text-blue-400"><MdOutlineAccountCircle className="" /></button>
        </div>

      </section>
    </nav>
  )
}

export default Nav