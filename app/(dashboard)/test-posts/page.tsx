import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Posts() {
    const posts = await getPosts()
    
    return <pre>{JSON.stringify(posts, null, 4)}</pre>
}

async function getPosts(): Promise<Post[] | null> {
    const supabase = createServerComponentClient<Database>({ cookies })

    const { data, error } = await supabase.from('posts')
        .select()

    if (error) {
        console.error(error)
    }

    return data
}

