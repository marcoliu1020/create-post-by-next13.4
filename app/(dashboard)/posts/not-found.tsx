import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <main className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl">Have no post</h2>
            <p>We could not found the post you are looking for</p>
            <p>
                Go back to the
                <Button variant='link'>
                    <Link href='/posts'>posts</Link>
                </Button>
            </p>
        </main>
    )
}
