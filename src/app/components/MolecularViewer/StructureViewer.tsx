"use client"

import React, { useEffect, useRef } from "react"
import { useCompound } from "@/app/context/CompounContext"

const StructureViewer = () => {
    const { data } = useCompound()
    const viewerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!data || !data.PC_Compounds?.[0].id?.id.cid) return

      const load3Dmol = async () => {
        const $3Dmol = await import('3dmol')

        if (viewerRef.current) {
          const viewer = new $3Dmol.GLViewer(viewerRef.current, { backgroundColor: "white" })

          // Fetch 3D structure in SDF format
          fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${data.PC_Compounds?.[0].id?.id.cid}/SDF?record_type=3d`)
          .then((response) => response.text())
          .then((sdfData) => {
            const model = viewer.addModel(sdfData, "sdf")
            model.setStyle({}, { stick: { radius: 0.15 }, sphere: { scale: 0.3 } })
            viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.7, color: "lightblue" })
            
            // model.selectedAtoms({}).forEach((atom: any) => {
            //   if (atom.elem !== 'H') { //skip hydrogens
            //     viewer.addLabel(atom.elem, {
            //       position: atom, fontColor: 'black', backgroundColor: 'white'
            //     })
            //   }
            // })
            viewer.zoomTo()
            viewer.render()
          }).catch((error) => console.error("Error fetching 3D structure", error))
        }
      }
      load3Dmol()

    }, [data])

  return (
    <div className="shadow rounded-sm" ref={viewerRef} style={{ width: "100%", height: "400px", position: "relative", cursor: "pointer" }} ></div>
  )
}

export default StructureViewer