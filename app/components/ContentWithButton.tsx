type Props = {
    children: React.ReactNode,
    title: React.ReactNode,
    button: React.ReactNode
}

export default function ContentWithButton({ children, title, button }: Props) {
    return (
        <main className='max-w-5xl w-full mx-auto py-12 px-8'>
            <nav className='flex items-center justify-between gap-5'>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    {title}
                </h2>
                <div>
                    {button}
                </div>
            </nav>

            {children}
        </main>
    );
}
