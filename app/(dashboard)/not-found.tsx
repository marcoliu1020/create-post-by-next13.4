import Link from "next/link"

import { Button } from "@/components/ui/button"


export default function NotFound() {
    return (
        <main className="flex-1 flex flex-col justify-center items-center">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                There was a problem
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                We could not found the page you are looking for
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Go back to the
                <Button variant='link'>
                    <Link href='/'>Dashboard</Link>
                </Button>
            </p>
        </main>
    )
}
