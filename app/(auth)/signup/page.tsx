'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// component
import AuthForm from "../login/AuthForm"
import { Button } from "@/components/ui/button"
import ErrorMessage from "@/app/components/ErrorMessage"

export default function Signup() {
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false)
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
        <main className="flex flex-1 flex-col justify-center py-0 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Title title={'Sign up'} />
            </div>

            <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
                    <AuthForm
                        button={<SignupButton isLoading={isLoading} />}
                        errorMsg={<ErrorMessage message={errMsg} />}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </main>
    )
}

function Title({ title }: { title: string }) {
    return (
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {title}
        </h2>
    )
}

function SignupButton({ isLoading }: { isLoading: boolean }) {
    return (
        <Button
            type='submit'
            disabled={isLoading}
            className='w-full'
        >
            {isLoading ? 'Sign up...' : "Sign up"}
        </Button>
    )
}