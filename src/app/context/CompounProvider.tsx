"use client"

import { createContext, ReactElement, useState } from "react"

export type CompoundType = {
    _id: string,
    name: string,
    formular: string,
    molecularWeight: number,
    structuralUrl: string
}

// const initState: CompoundType[] = []

const initState: CompoundType[] = [
    {
        "_id": "methane",
        "name": "methane",
        "formular": "CH4",
        "molecularWeight": 16,
        "structuralUrl": "/src/app/assets/methane.jpeg"
    },
    {
        "_id": "ethane",
        "name": "ethane",
        "formular": "C2H6",
        "molecularWeight": 30,
        "structuralUrl": "/src/app/assets/ethane.jpeg"
    },
    {
        "_id": "propane",
        "name": "propane",
        "formular": "C3H8",
        "molecularWeight": 44,
        "structuralUrl": "/src/app/assets/ethane.jpeg"
    },
    {
        "_id": "butane",
        "name": "butane",
        "formular": "C4H10",
        "molecularWeight": 58,
        "structuralUrl": "/src/app/assets/ethane.jpeg"
    },
]

export type UseCompoundContextType = { compounds: CompoundType[] }

const initContextState: UseCompoundContextType = { compounds: [] }

const CompoundContext = createContext<UseCompoundContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CompoundProvider = ({ children }: ChildrenType ): ReactElement => {
    const [compounds] = useState<CompoundType[]>(initState)

    // useEffect(() => {
    //     const fetchCompounds = async (): Promise<CompoundType[]> => {
    //         const data = await fetch('/compunds').then(res => {
    //             return res.json()
    //         }).catch(err => {
    //             if (err instanceof Error) console.log(err)
    //         })
    //         return data
    //     }
    //     fetchCompounds().then(compounds => setCompounds(compounds))
    // }, [])

    return (
        <CompoundContext.Provider value={{ compounds }}>
            { children }
        </CompoundContext.Provider>
    )
}

export default CompoundContext
