'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// hooks
import useLogout from "@/hook/useLogout";

// type
import { Props } from "./Navbar";

export default function ProfileInMobile({ user }: Props) {
    const { logout } = useLogout()

    return (
        <>
            <div className="flex items-center px-5">
                <Avatar>
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback>NA</AvatarFallback>
                </Avatar>

                <div className="ml-3 text-sm font-medium text-gray-400">{user.email}</div>
            </div>

            <ul className="space-y-1 px-2 pb-3 pt-2">
                <li
                    className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
        </>
    );
}
