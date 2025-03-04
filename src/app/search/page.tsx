"use client"
import React from "react"
import { useCompound } from "../context/CompounContext"
import { useSearchParams } from "next/navigation"
import StructureViewer from "../components/MolecularViewer/StructureViewer"

const Search = () => {
  const searchParams = useSearchParams()
  const compoundName = searchParams.get('compound')
  const { data } = useCompound()
  {/* Search Results */}
  console.log(data?.PC_Compounds)

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
                    <p className="">
                      <span className="text-slate-600">Results for </span>
                      <span className="text-slate-400">{compoundName}</span>
                    </p>

                    <div className="flex gap-3">
                      <StructureViewer />

                      <div className="">
                        <p className="text-slate-500">
                          Molecular Formula: { molecularFormula ? molecularFormula: "N/A" }
                        </p>
                        <p className="text-slate-500">
                          Molecular Weight: { molecularWeight ? `${molecularWeight} g/mol`: "N/A" }
                        </p>
                        <p className="text-slate-500">
                          Molecular Isomerism: { compoundIsomerism ? compoundIsomerism: "N/A" }
                        </p>
                        <p className="text-slate-500">
                          Log P: { logP ? logP: "N/A" }
                        </p>
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

export default Search