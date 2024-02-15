'use client'

import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function useLogout() {
    const router = useRouter()

    async function logout() {
        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.error(error)
            throw new Error(error.message)
        }

        if (!error) {
            router.push('/login')
        }
    }

    return { logout }
}