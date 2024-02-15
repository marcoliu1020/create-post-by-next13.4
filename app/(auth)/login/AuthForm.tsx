import React from "react"
import type { FormEvent } from "react"

// components
import { Button } from "@/components/ui/button"
import ErrorMessage from '@/app/components/ErrorMessage'

type AuthFormProps = {
    button: React.ReactNode
    errorMsg?: React.ReactNode
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export default function AuthForm({ button, errorMsg, onSubmit }: AuthFormProps) {
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        type="email"
                        name="email"
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
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            {button}

            {errorMsg}
        </form>
    )
}