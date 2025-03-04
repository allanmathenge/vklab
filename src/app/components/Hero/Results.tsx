
import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"
import HomePageMol from "../MolecularViewer/HomePageMol"
const MoleculeViewer = dynamic(() => import("../MolecularViewer/MoleculeViewer"))
const ChemicalFamily = dynamic(() => import("../MolecularViewer/ChemicalFamily"))

const Results = () => {
    
  return (
    <section className="sm:pt-4 flex flex-col w-full gap-3">

        <div className="flex flex-col sm:flex-row sm:flex-1 gap-3 ">

            <div className="h-auto min-w-[240px] shadow flex flex-col flex-1 justify-around bg-white px-1 py-3">
                <h3 className="text-wrap text-[#5b748a] text-center font-bold">Chemical Library</h3>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="p-1">
                        <Image 
                            src={"/cfamily.jpg"}
                            alt="Chemical Families" 
                            className="max-w-[200px] h-[200px] rounded-full border-2 border-[#5b748a]" 
                            width={240}
                            height={240}
                            placeholder="blur"
                            blurDataURL={'/cfamily.jpg'}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 text-[#5b748a] text-nowrap">
                        <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white">All Families</button>
                        <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white">Metals</button>
                        <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white">Non-metals</button>
                    </div>
                </div>
                
            </div>

            <div className="h-auto min-w-[240px] shadow flex-1 flex flex-col justify-between bg-white items-center overflow-hidden p-1">
                <h3 className="text-wrap text-[#5b748a] font-bold text-center">Docking Simulation</h3>
                <div className="flex gap-2 w-full">
                    <div className="flex h-[200px] w-full sm:w-[480px]">
                        <Image 
                            className="w-full h-full rounded-md object-cover"
                            src="/docking.jpg"
                            width={240}
                            height={240}
                            alt="Docking simulation"
                            title="Docking simulation"
                        />
                    </div>
                    <div className="flex flex-col justify-between gap-2 w-full max-w-[40%] text-[#5b748a]">
                        <p className="text-wrap text-sm">Predict how a ligand binds to a target receptor🧬</p>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap">Perform Docking</button>
                            <button className="bg-white shadow-sm shadow-slate-400 rounded-full py-1 px-3 hover:bg-blue-400 text-[16px] hover:text-white text-nowrap">3D visualization</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow w-full h-auto flex flex-col flex-1 justify-between bg-white p-1 text-[#5b748a] overflow-hidden px-1">
                <h3 className="text-wrap text-center font-bold">Visualize 2D of Compounds</h3>
                <p className="text-sm font-thin ">The 2D Visual architecture and the chirality of molecules</p>
                <div className="flex gap-2">
                    <div className="w-[72%] shadow rounded-sm p-0">
                        <HomePageMol />
                    </div>
                    <div className="shadow h-full w-full p-1 overflow-hidden flex flex-col gap-2">
                        <input 
                            type="text"
                            className="border text-[14px] rounded focus:outline-blue-400 p-1"
                            placeholder="Select compound ..."/>
                        <div className="flex flex-col gap-1 text-[12px]">
                            <p className="">Common name: Water</p>
                            <p className="">IUPAC name: {"!"}</p>
                            <p className="">Formular: H2O</p>
                            <p className="">Weight: 18</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex sm:flex-1 flex-wrap gap-3">

            <div className="flex-1 h-[240px] min-w-[240px] flex flex-col w-full bg-white shadow text-[#5b748a] px-1">
                <h3 className="text-wrap  text-center font-bold">Visualize 3D of Compounds</h3>
                <p className="text-[12px] font-thin text-center">Visualize 3D bonding in simple docked molecules</p>
                
                <div className="flex h-full max-h-[240px] items-center gap-2">
                    <MoleculeViewer />
                    <div className="w-[32%] sm:w-[40%] shadow">

                        <div className="shadow h-full w-full p-1 overflow-hidden flex flex-col gap-2">
                            <input 
                                type="text"
                                className="border text-[14px] rounded focus:outline-blue-400 p-1"
                                placeholder="Select compound ..."/>
                            <div className="flex flex-col gap-1 text-[12px]">
                                <p className="">Common name: <span className="text-slate-600">Caffeine</span></p>
                                <p className="">IUPAC name: <span className="text-slate-600">{"!"}</span></p>
                                <p className="">Formular: <span className="text-slate-600"> C3N2H6</span></p>
                                <p className="">Weight: <span className="text-slate-600">70</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex-1 h-[240px] min-w-[240px] flex flex-col shadow bg-white text-[#5b748a] px-1">
                <h3 className="text-wrap text-center font-bold">3D Bonding in complex Compounds</h3>
                <p className="text-[12px] font-thin text-center">Visualize 3D bonding in complex docked molecules</p>
                <div className="flex h-full items-center gap-2 p-1">
                    <ChemicalFamily />
                    <div className="w-[32%] sm:w-[40%] shadow">

                        <div className="shadow h-full w-full p-1 overflow-hidden flex flex-col gap-2">
                            <input 
                                type="text"
                                className="border text-[14px] rounded focus:outline-blue-400 p-1"
                                placeholder="Select compound ..."/>
                            <div className="flex flex-col gap-1 text-[12px]">
                                <p className="">Common Name: <span className="text-slate-600">Caffeine</span></p>
                                <p className="">IUPAC Name: <span className="text-slate-600">{"!"}</span></p>
                                <p className="">Formular: <span className="text-slate-600"> C3N2H6</span></p>
                                <p className="">Weight: <span className="text-slate-600">70</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto min-w-[240px] min-h-[240px] flex flex-col flex-1 gap-3 px-1 py-3">
                <div className="flex-1 shadow bg-white">
                    <h3 className="text-wrap text-[#5b748a] text-center font-bold">Your saved records</h3>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Results