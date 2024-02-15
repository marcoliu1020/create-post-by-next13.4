'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import { Button } from "@/components/ui/button"
import { Google } from '@/app/components/ProviderButtons'
import ErrorMessage from '@/app/components/ErrorMessage'

// helpers
import { getURL } from '@/lib/helpers'

export default function LoginForm() {
    return (
        <>
            {/*
                This example requires updating your template:
        
                ```
                <html class="h-full bg-gray-50">
                <body class="h-full">
                ```
            */}

            <div className="flex flex-1 flex-col justify-center py-0 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* <Logo /> */}
                    <Title title={'Sign in to your account'} />
                </div>

                <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
                        <EmailPasswordForm />
                        <Providers />
                    </div>

                    {/* <RememberMe /> */}
                </div>
            </div>
        </>
    )
}

function Logo() {
    return (
        <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        />
    )
}

function Title({ title }: { title: string }) {
    return (
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {title}
        </h2>
    )
}

function EmailPasswordForm() {
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
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                </div>
            </div>

            <div>
                <Button
                    disabled={isLoading}
                    className='w-full'
                >
                    {isLoading ? 'Sign in...' : "Sign in"}
                </Button>
            </div>

            <ErrorMessage message={errMessage} />
        </form>
    )
}

function Providers() {
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
        <div>
            <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
                <Google handleClick={handleSignInWithGoogle} />
            </div>
        </div>
    )
}

function Footer() {
    return (
        <p className="mt-0 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
            </a>
        </p>

    )
}