export default function ResetPassword() {
    // async function handleResetPassword(e: React.MouseEvent<HTMLButtonElement>) {
    //     e.preventDefault()
    //     setErrMessage('')

    //     const supabase = createClientComponentClient()
    //     const { error } = await supabase.auth.resetPasswordForEmail(email)

    //     if (error) setErrMessage(error.message)

    //     setIsloading(false)
    // }

    return (
        <div className="flex items-center justify-between">
            <div className="text-sm leading-6">
                <button
                    type="button"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                // onClick={handleResetPassword}
                >
                    Forgot password?
                </button>
            </div>
        </div>
    )
}