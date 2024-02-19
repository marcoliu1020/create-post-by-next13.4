import Link from "next/link"
import { cookies } from "next/headers"
import { notFound } from 'next/navigation'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// components
import { BreakLine } from "@/app/components/BreakLine"
import { ColorBadge } from '@/app/components/ColorBadge';

// helpers
import { toLocalTime } from "@/lib/helpers"


export default async function PostList() {
    const posts = await getPostsFromSupabaseServer()

    if (posts === null)
        return notFound()

    if (posts.length === 0)
        return (
            <>
                <BreakLine />
                <p className="text-center text-xl text-muted-foreground">There are no posts</p>
            </>
        )

    return (
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
            {posts.map(post =>
                <Card key={post.id}>
                    <Link className="w-full h-full flex flex-col" href={`/posts/${post.id}`}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{toLocalTime(post.created_at)}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{post.body?.slice(0, 100)}</p>
                        </CardContent>
                        <CardFooter className="flex-1 flex items-end justify-end">
                            <ColorBadge priority={post.priority} />
                        </CardFooter>
                    </Link>
                </Card>
            )}
        </div>
    )
}

async function getPostsFromSupabaseServer(): Promise<Post[] | null> {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data, error } = await supabase.from('posts')
        .select()
        .order("created_at", { ascending: false })

    if (error) {
        console.error(error)
    }

    return data
}
