"use client"

import { useContext } from "react"
import CompoundContext from "../context/CompounProvider"
import { UseCompoundContextType } from "../context/CompounProvider"

const useCompounds = (): UseCompoundContextType => {
    return useContext(CompoundContext)
}

export default useCompounds
