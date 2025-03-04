"use client"

import React, { FormEvent } from "react"
import { CiSearch } from "react-icons/ci"
import { useCompound } from "../../context/CompounContext"
import { useRouter } from "next/navigation"

const CompoundSearch = () => {

    const { query, setQuery, loading, searchCompound } = useCompound()
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim()) {
            searchCompound(query)
            router.push(`/search?compound=${encodeURIComponent(query)}`)
        }
        setQuery("")
          
    }

  return (
    <form 
        className="flex flex-1 min-w-16 items-center rounded-full overflow-hidden bg-white h-[32px] shadow-sm shadow-slate-400"
        onSubmit={handleSubmit}
    >
        <input 
            type="text"
            className="border-blue-200 rounded-full text-[1rem] pl-2 h-full w-full focus:outline-blue-300" 
            placeholder="Search ... "
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            required
        />

        <button 
            className="text-[32px] shadow-sm bg-white shadow-slate-400 -ml-8 h-full flex items-center p-1"
            type="submit"    
        >
            {loading 
                ? <div className="loader"/> 
                : <CiSearch className="hover:text-blue-400 text-blue-200"  
            />}
        </button>
    </form>
  )
}

export default CompoundSearch