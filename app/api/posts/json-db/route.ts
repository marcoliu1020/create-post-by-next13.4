import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

const JSON_DB_URL = 'http://localhost:4000/posts'

export async function GET() {
    const res = await fetch(JSON_DB_URL)
    const posts: Post[] = await res.json()

    return NextResponse.json(posts, { status: 200 })
}

export async function POST(request: NextRequest) {
    const post = await request.json()

    const res = await fetch(JSON_DB_URL, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(post)
    })

    const newTicket = await res.json()

    return NextResponse.json(newTicket, { status: 201 })
}