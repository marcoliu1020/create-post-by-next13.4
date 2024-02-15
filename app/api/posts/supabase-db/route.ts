import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    const post = await request.json()
    console.log({ post });

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get the current use session
    const { data: { session } } = await supabase.auth.getSession()
    console.log({ session });

    // insert the data
    const { data, error } = await supabase.from('posts')
        .insert({
            ...post,
            user_email: session?.user.email
        })
        .select()
        .single()

    return NextResponse.json({ data, error })
}