
import { NextResponse } from "next/server";

const PUBCHEM_API_BASE = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug'

export async function GET(request: Request) {

    try {
        const { searchParams } = new URL(request.url)
        const compoundName = searchParams.get("compound")

        if (!compoundName) {
            return NextResponse.json({ error: "Missing compound name!" }, { status: 400 })
        }
        const response = await fetch(`${PUBCHEM_API_BASE}/compound/name/${encodeURIComponent(compoundName)}/JSON`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            cache: 'force-cache'
        })
        if (!response.ok) throw new Error(`${compoundName} was not found!`)
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
