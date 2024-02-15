
export default function Loading() {
    return (
        <main className="flex-1 flex flex-col justify-center items-center">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Loading...
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Hopefully not for too long :)
            </p>
        </main>
    )
}
