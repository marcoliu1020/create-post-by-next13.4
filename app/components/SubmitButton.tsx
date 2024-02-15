'use client'

import React from "react"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import { Button } from "@/components/ui/button"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // You can add additional props specific to your SubmitButton if needed
}

export default function SubmitButton(props: ButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} {...props}>
            {pending
                ? <span>Submitting...</span>
                : <span>Submit</span>
            }
        </Button>
    )
}