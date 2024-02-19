'use client'

import React from "react"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import { Button } from "@/components/ui/button"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    // You can add additional props specific to your SubmitButton if needed
    isLoading?: boolean
}

export default function SubmitButton(props: ButtonProps) {
    const { pending } = useFormStatus()
    const { isLoading, ...rest } = props
    const isSubmitting = pending || isLoading

    return (
        <Button disabled={isSubmitting} {...rest}>
            {isSubmitting
                ? <span>Submitting...</span>
                : <span>Submit</span>
            }
        </Button>
    )
}