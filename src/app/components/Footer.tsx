import React from "react"

const Footer = () => {
  const date: number = new Date().getFullYear()
  return (
    <footer className="h-40 text-[#5b748a]">
      <h1 className="text-center items-center">&copy;Allan Mathenge {date}</h1>
    </footer>
  )
}

export default Footer