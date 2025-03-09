"use client"
import React from "react"
import { useCompound } from "../context/CompounContext"
import { useSearchParams } from "next/navigation"
import StructureViewer from "../components/MolecularViewer/StructureViewer"
import { Suspense } from 'react'

const SearchComponent = () => {
  const searchParams = useSearchParams()
  const compoundName = searchParams.get('compound')
  const { data } = useCompound()
  {/* Search Results */}
  // console.log(data?.PC_Compounds)

  return (
    <section>
      {data?.error && <p className="text-red-500">{`No ${data.error}`}</p>}
      {
        data?.PC_Compounds && (
          <ul className="">
            {
              data.PC_Compounds.map((compound, index) => {
                // extract molecular weight
                const molecularWeight = compound.props?.find(
                  (prop) => prop.urn.label === "Molecular Weight"
                )?.value.sval

                const molecularFormula = compound.props?.find(
                  (prop) => prop.urn.label === "Molecular Formula"
                )?.value.sval

                const compoundIsomerism = compound.props?.find(
                  (prop) => prop.urn.name === "Canonical"
                )?.value.sval

                const logP = compound.props?.find(
                  (prop) => prop.urn.label === "Log P"
                )?.value.fval

                return (
                  <li key={index} className="">
                    <h3 className="text-[16px] py-2">
                      <span className="text-slate-500">Results for </span>
                      <span className="text-slate-400">{compoundName}</span>
                    </h3>

                    <div className="flex flex-wrap-reverse gap-3">
                        <StructureViewer />
                      
                      <div className="w-full flex gap-3 font-bold">
                        <div className="flex-1 shadow p-2">
                          <p className="text-slate-500">
                            Molecular Formula: <span className="text-slate-400">{ molecularFormula ? molecularFormula: "N/A" }</span>
                          </p>
                          <p className="text-slate-500">
                            Molecular Weight: <span className="text-slate-400">{ molecularWeight ? `${molecularWeight} g/mol`: "N/A" }</span>
                          </p>
                        </div>

                        <div className="flex-1 shadow p-2">
                          <p className="text-slate-500">
                            Molecular Isomerism: <span className="text-slate-400">{ compoundIsomerism ? compoundIsomerism: "N/A" }</span>
                          </p>
                          <p className="text-slate-500">
                            Log P: <span className="text-slate-400">{ logP ? logP: "N/A" }</span>
                          </p>
                        </div>

                      </div>
                    </div>

                  </li>
                )
              })
            }
          </ul>
        )
      }
    </section>
  )
}

export default function Search() {
  return (
    <Suspense fallback={<h2>Loading ... </h2>}>
      <SearchComponent />
    </Suspense>
  )
}