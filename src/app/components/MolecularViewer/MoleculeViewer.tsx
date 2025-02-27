"use client"

import React, { useEffect, useRef } from "react"
import dynamic from "next/dynamic"

const MoleculeViewer = () => {
    const viewerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const load3Dmol = async () => {
            // Dynamically import 3Dmol.js
            const $3Dmol = await import('3dmol')

            if (viewerRef.current) {
                const viewer = new $3Dmol.GLViewer(viewerRef.current, { backgroundColor: 'white' })

                // Example: Caffeine molecule
                const pdbData = `
                HETATM    1  C1  CFF A   1      -0.012  -0.001   0.000  1.00  0.00           C
                HETATM    2  N1  CFF A   1       1.205   0.697   0.000  1.00  0.00           N
                HETATM    3  C2  CFF A   1       2.428  -0.078   0.000  1.00  0.00           C
                HETATM    4  N2  CFF A   1       2.422  -1.492   0.000  1.00  0.00           N
                HETATM    5  C3  CFF A   1       1.200  -2.189   0.000  1.00  0.00           C
                END`
                // Add model
                const model = viewer.addModel(pdbData, 'pdb')

                // Set styles
                model.setStyle({}, { stick: { radius: 0.15 }, sphere: { scale: 0.3 } })

                // Add surface
                viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.7, color: 'lightblue' }, {})

                // Add labels
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                model.selectedAtoms({}).forEach((atom: any) => {
                    if (atom.elem !== 'H') { // skip hydrogens
                        viewer.addLabel(atom.elem, { position: atom, fontColor: 'black', backgroundColor: 'white' })
                    }
                })
                viewer.zoomTo();
                viewer.render();
            }
        }
        load3Dmol()
    }, [])

  return (
    <div ref={viewerRef} style={{ width:'100%', height:'100%', position: 'relative', cursor: 'pointer' }} />
  )
}

export default dynamic(() => Promise.resolve(MoleculeViewer), { ssr: false })