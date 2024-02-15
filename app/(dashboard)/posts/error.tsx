'use client'

type props = {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: props) {
    return (
        <main className="text-center">
            <h2 className="text-4xl">Error!</h2>

            <p>{error.message}</p>

            <button
                onClick={reset}
                className="btn-primary mx-auto my-4"
            >
                tyr again!
            </button>
        </main>
    )
}
