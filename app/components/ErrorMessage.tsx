export default function ErrorMessage({ message }: { message?: string }) {
    if (!message) return ''

    return (
        <p className="bg-red-100 border border-red-500 text-red-900 rounded-md px-3 py-1.5 text-center text-sm font-semibold leading-6 shadow-sm">
            {message}
        </p>
    )
}
