import { cookies } from 'next/headers';
import { notFound } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

// helpers
import { toLocalTime } from "@/lib/helpers"

// components
import ContentWithButton from '@/app/components/ContentWithButton';
import DeleteButton from './DeleteButton';
import { ColorBadge } from '@/app/components/ColorBadge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const dynamicParams = true

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params: { id } }: Props) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: post } = await supabase.from('posts')
        .select()
        .eq('id', id)
        .single()

    return {
        title: `Post | ${post?.title || 'Post not found'}`
    }
}

export default async function PostDetails({ params: { id } }: Props) {
    const post = await getTicket(id)

    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.auth.getSession()

    const title = "Post Detail"

    // delet post only by author
    const deleteButton = data.session?.user.email === post.user_email
        ? <DeleteButton id={post.id} />
        : null

    return (
        <ContentWithButton title={title} button={deleteButton} >
            <Card className='mt-8'>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{toLocalTime(post.created_at)}</CardDescription>
                    <CardDescription>Author: {post.user_email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{post.body}</p>
                </CardContent>
                <CardFooter className="flex-1 flex items-end justify-end">
                    <ColorBadge priority={post.priority} />
                </CardFooter>
            </Card>
        </ContentWithButton>
    )
}

async function getTicket(id: string): Promise<Post> {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.from('posts')
        .select()
        .eq('id', id)
        .single()

    if (!data) {
        // if you have not-found.tsx
        // the next.js notFound() page will be replaced
        notFound()
    }

    return data
}

// why delete function generateStaticParams() ?
// because introduce authentication and we'll be ussing cookies,
// we can't really statically build these pages as we did before.

// create html at build time
// export async function generateStaticParams(): Promise<{ id: string }[]> {
//     const res = await fetch('http://localhost:4000/posts')
//     const posts: Post[] = await res.json()

//     return posts.map(post => ({ id: post.id }))
// }