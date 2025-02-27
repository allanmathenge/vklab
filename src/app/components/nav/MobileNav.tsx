"use client"

import React, { useState } from "react"
import Logo from "../Logo"
import Hamburger from 'hamburger-react'
import { CiSearch } from "react-icons/ci"

const MobileNav = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <div className="flex w-full justify-between items-center p-2 gap-2 bg-[#f5f5f5]">
        <Logo />
        {/* Search bar */}

        <div className="flex flex-1 min-w-16 max-w-96 items-center rounded-full overflow-hidden bg-white h-[32px] shadow-sm shadow-slate-400">
            <input type="text" className="border-blue-200 rounded-full text-[1rem] pl-2 h-full w-full focus:outline-blue-300" placeholder="Search ... "/>
            <div className="text-[32px] shadow-sm bg-white shadow-slate-400 cursor-pointer -ml-8 h-full flex items-center p-1"><CiSearch className="hover:text-blue-400 text-blue-200" /></div>
        </div>

        <div className="z-50 shadow">
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Fullscreen overlay menu */}
        {
            isOpen && <nav className={`fixed inset-0 bg-blue-200 text-slate-600 flex flex-col items-center justify-center space-y-6 text-xl transition-transform duration-300 h-full ${isOpen ? "translate-x-0" : "translate-x-full" }`}>

            <button className="">Home</button>
            <button className="">Chemical Library</button>
            <button className="">Molecular Viewer</button>
            <button className="">Docking Simulations</button>
            </nav>
        }
    </div>
  )
}

export default MobileNav