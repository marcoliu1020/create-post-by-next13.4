'use client'

import Link from "next/link"
import Image from "next/image"

// components
import ProfileInDeskTop from "./ProfileInDeskTop"
import ProfileInMobile from "./ProfileInMobile"
import Hamburger from "./Hamburger"

// type
import type { User } from '@supabase/auth-helpers-nextjs'
import { BreakLine } from "../BreakLine"
export type Props = { user: User }

export const LinkOfURLs = [
    { id: 1, url: '/', title: 'Home' },
    { id: 2, url: '/posts', title: 'Posts' },
]

export default function Navbar({ user }: Props) {
    console.log(user);

    return (
        <nav className="bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex h-16 items-center justify-between">
                <LinksOfDeskTop />

                <div className="hidden sm:ml-6 sm:block">
                    <ProfileInDeskTop user={user} />
                </div>

                <div className="-mr-2 flex sm:hidden">
                    <Hamburger>
                        <LinksOfMobile />
                        <BreakLine />
                        <ProfileInMobile user={user} />
                    </Hamburger>
                </div>
            </div>
        </nav>
    )
}

function LinksOfDeskTop({ selectedId }: { selectedId?: number }) {
    return (
        <div className="flex items-center">

            {/* company logo */}
            <div className="flex-shrink-0">
                <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
            </div>

            {/* navbar */}
            <div className="hidden sm:ml-8 sm:block">
                <div className="flex space-x-4">
                    {LinkOfURLs.map(l => (
                        <Link
                            key={l.id}
                            href={l.url}
                            className={selectedId === l.id
                                ? "rounded-md bg-gray-900 px-3 py-2 text-lg font-medium text-white"
                                : "rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }>
                            {l.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function LinksOfMobile({ selectedId }: { selectedId?: number }) {

    const links = LinkOfURLs.map(link => (
        <Link
            key={link.id}
            href={link.url}
            className={selectedId === link.id
                ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
        >
            {link.title}
        </Link>
    ))

    return (
        <div className="space-y-1 px-2 pb-3 pt-2">
            {links}
        </div>
    )
}
