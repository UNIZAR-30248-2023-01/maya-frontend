import { NextResponse } from 'next/server'

// example: GET /api/hello
export async function GET (request) {
  return NextResponse.json({
    name: 'John Doe'
  })
}
