import { NextResponse } from 'next/server'
export const runtime = 'edge'

const startTimeMs = Date.now()

export async function GET() {
  return NextResponse.json({ 
    app:'NavSphere',
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: Number(((Date.now() - startTimeMs) / 1000).toFixed(3))
  })
}