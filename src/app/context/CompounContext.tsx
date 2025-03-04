"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"

type Compound = {
    id?: { id: { cid: number } },
    props?: { urn: { label: string, name?: string }, value: { sval?: number | string, fval?: number } }[]
}

type CompoundData = {
    PC_Compounds?: Compound[],
    error?: string
}

type CompoundContextType = {
    query: string,
    setQuery: (query: string) => void,
    data: CompoundData | null,
    searchCompound: (query: string) => Promise<void>
    loading: boolean
}

export const CompoundContext = createContext<CompoundContextType | undefined>(undefined)

type ChildrenType = {
    children: ReactNode | null
}

export const CompoundProvider = ({ children }: ChildrenType ) => {
    const [query, setQuery] = useState<string>("")
    const [data, setData] = useState<CompoundData | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const searchCompound = async (compoundName: string) => {
        if (!compoundName) return
        setLoading(true)
        setQuery(compoundName)

        try {
            // Fetch data
            const response = await fetch(`/api/pubchem?compound=${encodeURIComponent(compoundName)}`)
            const result: CompoundData = await response.json()
            setData(result)
            
        } catch (err) {
            if (err instanceof Error) console.error("Error fetching Data: ", err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <CompoundContext.Provider value={{ query, setQuery, data, loading, searchCompound }}>
            {children}
        </CompoundContext.Provider>
    )
}

export const useCompound = () => {
    const context = useContext(CompoundContext)
    if (!context) {
        throw new Error("useCompound must be used within a CompoundProvider")
    }
    return context
}