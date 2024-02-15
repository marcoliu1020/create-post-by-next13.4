'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { getURL } from "@/lib/helpers";

// components
import AuthForm from "./AuthForm";

export default function LoginWithPassword() {
    const router = useRouter()
    const [errMessage, setErrMessage] = useState('')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setErrMessage('')

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        // console.log({ email, password })

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) setErrMessage(error.message)
        if (!error) router.push('/')
    }

    async function handleSignInWithGoogle() {
        const supabase = createClientComponentClient()
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${getURL() + '/api/auth/callback'}`
            }
        })
    }


    return (
        <main>
            <h2 className="text-center">Log in</h2>

            <AuthForm onSubmit={handleSubmit} onSignInWithGoogle={handleSignInWithGoogle} />

            {errMessage && <div className="error">{errMessage}</div>}
        </main>
    )
}
