'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import AuthForm from './AuthForm'
import SignUpLink from './SignUpLink'
import { Button } from "@/components/ui/button"
import ErrorMessage from '@/app/components/ErrorMessage'

// helpers
import { Providers } from './Providers'

export default function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsloading(true)
        setErrMessage('')

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        // console.log({ email, password })

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) setErrMessage(error.message)
        else router.push('/')

        setIsloading(false)
    }

    return (
        <main className="flex flex-1 flex-col justify-center py-0 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Title title={'Sign in to your account'} />
            </div>

            <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
                    <AuthForm
                        button={<SigninButton isLoading={isLoading} />}
                        errorMsg={<ErrorMessage message={errMessage} />}
                        onSubmit={handleSubmit}
                    />
                    <SignUpLink />
                    <Providers />
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

function SigninButton({ isLoading }: { isLoading: boolean }) {
    return (
        <Button
            type='submit'
            disabled={isLoading}
            className='w-full'
        >
            {isLoading ? 'Sign in...' : "Sign in"}
        </Button>
    )
}