"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function CreateFormByClient() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsloading] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsloading(true)

        // for loacl json db        
        // const post = { title, body, priority, user_email: 'marco@gmail.com' }
        // const jsonServerURL = 'http://localhost:4000/posts'
        // const res = await fetch(jsonServerURL, {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(post)
        // })

        // for online supabase db
        const post = { title, body, priority }
        const supabaseServerURL = 'http://localhost:3000/api/posts/supabase-db'
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

    }

    return (
        <form className="w-1/2" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input
                    name='title'
                    required
                    tabIndex={1}
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>

            <label>
                <span>Body:</span>
                <textarea
                    name='body'
                    required
                    tabIndex={1}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </label>

            <label>
                <span>Priority:</span>
                <select
                    name='priority'
                    tabIndex={1}
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Mediumn Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>

            <button tabIndex={1} className="btn-primary" disabled={isLoading}>
                {isLoading
                    ? <span>Adding...</span>
                    : <span>Add Post</span>
                }
            </button>
        </form>
    )
}

