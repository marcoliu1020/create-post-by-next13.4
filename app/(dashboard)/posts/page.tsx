import type { Metadata } from 'next'
import { Suspense } from "react";
import Link from 'next/link';

// components
import ContentWithButton from '@/app/components/ContentWithButton';
import Loading from "../loading";
import PostList from "./PostList";
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: 'Posts',
}

export default function Posts() {
    const title = (
        <>
            Training Posts
            <p className="text-base leading-7 [&:not(:first-child)]:mt-0 text-gray-500">
                Recently trainging
            </p>
        </>
    )

    const createButton = (
        <Link href={'/posts/create'}>
            <Button>New Post</Button>
        </Link>
    )

    return (
        <ContentWithButton title={title} button={createButton}>
            <Suspense fallback={<Loading />}>
                <PostList />
            </Suspense>
        </ContentWithButton>
    )
}