/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

const MoleculeViewer = () => {
    const viewerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    let viewer: any = null

    useEffect(() => {
        // IntersectionObserver to lazy load when visible
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        if (viewerRef.current) {
            observer.observe(viewerRef.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const loadMolecule = async () => {
            if (viewerRef.current && isVisible) {
                const $3Dmol = await import('3dmol')

                // Initialize viewer
                viewer = new $3Dmol.GLViewer(viewerRef.current, { backgroundColor: 'white' })

                // Caffeine molecule PDB data
                const pdbData = `
                    HETATM    1  C1  CAF A   1      -0.012  -0.001   0.000  1.00  0.00           C
                    HETATM    2  N1  CAF A   1       1.205   0.697   0.000  1.00  0.00           N
                    HETATM    3  C2  CAF A   1       2.428  -0.078   0.000  1.00  0.00           C
                    HETATM    4  N2  CAF A   1       2.422  -1.492   0.000  1.00  0.00           N
                    HETATM    5  C3  CAF A   1       1.200  -2.189   0.000  1.00  0.00           C
                    HETATM    6  C4  CAF A   1      -0.012  -1.493   0.000  1.00  0.00           C
                    HETATM    7  N3  CAF A   1      -1.234  -2.188   0.000  1.00  0.00           N
                    HETATM    8  C5  CAF A   1      -2.446  -1.492   0.000  1.00  0.00           C
                    HETATM    9  N4  CAF A   1      -2.440  -0.077   0.000  1.00  0.00           N
                    HETATM   10  C6  CAF A   1      -1.222   0.697   0.000  1.00  0.00           C
                    END
                    `
                // Load simplified model first
                viewer.addModel(pdbData, 'pdb')
                viewer.setStyle({}, { line: { color: 'gray' } })

                // initial render
                viewer.zoomTo()
                viewer.render()

                // Add complex styles after initial render
                setTimeout(() => {
                    viewer.setStyle({}, { stick: {}, sphere: { scale: 0.3 } })
                    viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.7, color: 'lightblue' })
                    viewer.render()
                }, 500)

                // viewer.setSpin(true)
            }
        }
        loadMolecule()
    }, [isVisible])

    // Handle window and resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (viewer) {
                viewer.resize()
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (
    <div ref={viewerRef} style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}></div>
  )
}

export default dynamic(() => Promise.resolve(MoleculeViewer), { ssr: false })