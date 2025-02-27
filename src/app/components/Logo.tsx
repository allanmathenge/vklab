import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <section className="">
        <Link href="/" className="flex flex-col drop-shadow-sm tracking-tight"><span className="text-[1rem] my-0 text-[blue] ">Vklab</span><span className="text-[8px]">Your virtual Lab</span></Link>
    </section>
  )
}

export default Logo