'use server'

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

export async function addPost(formData: FormData) {
    const post = {
        title: formData.get('title') as string,
        body: formData.get('body') as string,
        priority: formData.get('priority') as string
    }

    const supabase = createServerActionClient<Database>({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    // insert data
    const { error } = await supabase.from('posts')
        .insert({
            ...post,
            user_email: session?.user.email
        })

    if (error) {
        console.error({ error });
        throw new Error('Could not add a new post!!!')
    }

    revalidatePath('/posts')
    redirect('/posts')
}

export async function deletePost(id: number) {
    const supabase = createServerActionClient<Database>({ cookies })

    // delete data
    const { error } = await supabase.from('posts')
        .delete()
        .eq('id', id)

    if (error) {
        console.error({ error });
        throw new Error('Could not delete the post!!!')
    }

    revalidatePath('/posts')
    redirect('/posts')
}