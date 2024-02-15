import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = new URL(request.url)
    
    // console.log({ url });
    // url: URL {
    //     href: 'http://localhost:3000/api/auth/callback?code=398d2042-b5f7-45cd-b364-75d9c9b29b47',
    //     origin: 'http://localhost:3000',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: 'localhost:3000',
    //     hostname: 'localhost',
    //     port: '3000',
    //     pathname: '/api/auth/callback',
    //     search: '?code=398d2042-b5f7-45cd-b364-75d9c9b29b47',
    //     searchParams: URLSearchParams { 'code' => '398d2042-b5f7-45cd-b364-75d9c9b29b47' },
    //     hash: ''
    //   }

    const code = url.searchParams.get('code')
    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
    }

    // return NextResponse.redirect(url.origin)
    return NextResponse.redirect(new URL('/', request.url))
}