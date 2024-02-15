import Link from "next/link";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from "react";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {
    children: ReactNode
}

export default async function AuthLayout({ children }: Props) {

    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) redirect('/')

    return (
        <>
            {/* <nav>
                <h1>Marco HelpDesk</h1>
                <Link href='/signup'>Sign up</Link>
                <Link href='/login'>Log in</Link>
            </nav> */}

            {children}
        </>
    )
}