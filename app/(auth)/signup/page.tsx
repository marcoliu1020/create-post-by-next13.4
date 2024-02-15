'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// component
import AuthForm from "../login/AuthForm"

export default function Signup() {
    const router = useRouter()
    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        // form data
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        // error
        if (!email) throw new Error('no email')
        if (!password) throw new Error('no password')

        // sign up with supabase
        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`
            }
        })

        // error message
        if (error) setErrMsg(error.message)
        // redirect page
        if (!error) router.push('/verify')
    }

    return (
        <main>
            <h2 className="text-center">Sign up</h2>

            <AuthForm onSubmit={handleSubmit} />

            {errMsg &&
                <div className="error">
                    {errMsg}
                </div>}
        </main>
    )
}
