import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import Navbar from "../components/Navbar.RWD/Navbar";

type Props = {
    children: ReactNode
}

export default async function DashboardLayout({ children }: Props) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.auth.getSession()

    if (!data.session) redirect('/login')

    return (
        <>
            <Navbar user={data.session.user} />
            {children}
        </>
    )
}