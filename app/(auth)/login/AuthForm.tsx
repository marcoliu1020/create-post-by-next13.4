'use client'

import { FormEvent, useState } from "react"

type Props = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onSignInWithGoogle?: () => void
}

export default function AuthForm({ onSubmit, onSignInWithGoogle }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>

                <button className="btn-primary">submit</button>
            </form>

            <div className="providers mt-2 flex flex-col gap-2 items-center">
                {onSignInWithGoogle && <button className="btn-secondary" onClick={onSignInWithGoogle}>Sign in with Google</button>}
            </div>
        </>
    )
}