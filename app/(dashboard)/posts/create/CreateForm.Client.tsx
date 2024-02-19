"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

// components
import SubmitButton from "@/app/components/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


// helper
import { getURL } from "@/lib/helpers"

export default function CreateFormByClient() {
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsloading(true)

        // for online supabase db
        const form = new FormData(e.currentTarget)
        const post = {
            title: form.get('title'),
            body: form.get('body'),
            priority: form.get('priority')
        }
        const supabaseServerURL = getURL() + `/api/posts/supabase-db`
        const res = await fetch(supabaseServerURL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })

        const { data, error } = await res.json()
        console.log({ data, error });

        if (error) {
            console.error(error);
        }

        if (data) {
            router.refresh()
            router.push('/posts')
        }

        setIsloading(false)
    }

    return (
        <>
            <Card className="bg-inherit shadow-none border-none">
                <CardHeader>
                    <CardTitle className="mx-auto">Create a New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form isLoading={isLoading} onSubmit={handleSubmit} />
                </CardContent>
            </Card>


            {/* <button tabIndex={1} className="btn-primary" disabled={isLoading}>
                    {isLoading
                        ? <span>Adding...</span>
                        : <span>Add Post</span>
                    }
                </button> */}
        </>
    )
}

type FormProps = {
    isLoading?: boolean
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function Form({ isLoading, onSubmit }: FormProps) {
    return (
        <form className="mx-auto max-w-xl grid grid-cols-1 gap-5" onSubmit={onSubmit}>
            <Label className="space-y-2">
                <span>Title:</span>
                <Input
                    name='title'
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                />
            </Label>

            <Label className="space-y-2">
                <span>Body:</span>
                <Textarea
                    name='body'
                    required
                    tabIndex={1}
                />
            </Label>

            <Label className="space-y-2">
                <span>Priority:</span>
                <Select name="priority" defaultValue="low">
                    <SelectTrigger tabIndex={1}>
                        <SelectValue placeholder='select priority' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">low</SelectItem>
                        <SelectItem value="medium">medium</SelectItem>
                        <SelectItem value="high">high</SelectItem>
                    </SelectContent>
                </Select>
            </Label>

            <SubmitButton isLoading={isLoading} className="block mx-auto" tabIndex={1} />
        </form>
    )
}