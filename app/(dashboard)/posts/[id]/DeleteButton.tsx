'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TiDelete } from 'react-icons/ti'

// components
import { Button } from "@/components/ui/button"

export default function DeleteButton({ id }: { id: string }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function handleClick() {
        setIsLoading(true)
        // console.log('deleting id - ', id);

        const url = `http://localhost:3000/api/posts/${id}`
        const res = await fetch(url, { method: 'DELETE' })
        const data = await res.json()

        if (data.error) {
            console.error(data)
            setIsLoading(false)
        }

        if (!data.error) {
            router.refresh()
            router.push('/posts')
        }
    }

    return (
        <Button
            className='bg-red-600 hover:bg-red-600 hover:bg-opacity-90 flex gap-2'
            onClick={handleClick}
            disabled={isLoading}
        >
            <TiDelete />

            {isLoading ? 'Deleting...' : 'Delete Post'}
        </Button>
    )
}
