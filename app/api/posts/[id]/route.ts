import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export async function DELETE(
    _: NextRequest,
    { params }: { params: { id: string } }
) {
    const supabase = createRouteHandlerClient<Database>({ cookies })

    const id = params.id
    
    const { error } = await supabase.from('posts')
        .delete()
        .eq('id', id)

    return NextResponse.json({ error })
}

// for local json server
// export async function GET(
//     _: NextRequest,
//     { params: { id } }: { params: { id: string } }
// ) {
//     const res = await fetch(`http://localhost:4000/posts/${id}`)
//     const post = await res.json()

//     if (!res.ok) {
//         return NextResponse.json({ error: 'Cannot find post' }, { status: 404 })
//     }

//     return NextResponse.json(post, { status: 200 })
// }