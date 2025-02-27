"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei"

const Atom = ({ position, color }: { position: [number, number, number], color: string }) => (
    <mesh position={position}>
        <sphereGeometry args={[0.2, 64, 64]} />
        <meshPhongMaterial color={color} shininess={50} />
    </mesh>
)

// Bond component with accurate rotation and positioning
const Bond = ({ start, end }: { start: [number, number, number], end: [number, number, number]}) => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const midPoint = startVec.clone().add(endVec).multiplyScalar(0.5)
    const direction = new THREE.Vector3().subVectors(endVec, startVec)
    const length = direction.length()

    const orientation = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize()
    )
    return (
        <mesh position={midPoint} quaternion={orientation}>
            <cylinderGeometry args={[0.05, 0.05, length, 32]} />
            <meshPhongMaterial color="#cccccc" />
        </mesh>
    )
}

// Optimized Rotating water molecule 
const OptimizedMolecule = () => {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005
        }
    })

    // water Geometry with 104.5 bond angle
    const angle = (104.5 * Math.PI) / 180
    const oxygenPos: [number, number, number] = [0, 0, 0]
    const hydrogen1Pos: [number, number, number] = [Math.sin(angle / 2), Math.cos(angle / 2), 0]
    const hydrogen2Pos: [number, number, number] = [-Math.sin(angle / 2), Math.cos(angle / 2), 0]

    return (
        <group ref={groupRef}>
            {/* Atoms */}
            <Atom position={oxygenPos} color="red" />
            <Atom position={hydrogen1Pos} color="white" />
            <Atom position={hydrogen2Pos} color="white" />

            {/* Bonds */}
            <Bond start={oxygenPos} end={hydrogen1Pos} />
            <Bond start={oxygenPos} end={hydrogen2Pos} />
        </group>
    )
}

const HomePageMol = () => (
    <Canvas className="canvas" style={{ height: '100%', width: '100%', cursor: 'pointer', position: 'relative', zIndex: '5' }} camera={{ position: [0, 0, 3]}}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1}/>
    <OptimizedMolecule />
    <OrbitControls enableZoom={true} />
    </Canvas>
)

export default HomePageMol