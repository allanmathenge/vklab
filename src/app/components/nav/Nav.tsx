import React from "react"
import { MdOutlineAccountCircle } from "react-icons/md";
import MobileNav from "./MobileNav";
import CompoundSearch from "./CompoundSearch";
import Link from "next/link";

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
          <Link href="/" className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white">Home</Link>
          <Link href="/" className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Chemical Library</Link>
          <Link href="/" className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Molecular Viewer</Link>
          <Link href="/" className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap overflow-hidden">Docking Simulations</Link>

          <CompoundSearch />

          <button className="text-[32px] text-[#333] shadow-sm shadow-slate-400 rounded-full hover:text-blue-400"><MdOutlineAccountCircle className="" /></button>
        </div>

      </section>
    </nav>
  )
}

export default Nav