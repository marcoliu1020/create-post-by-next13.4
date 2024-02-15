import type { Database as DB } from "@/database.types.ts"

declare global {
    type Database = DB
    type Post = DB['public']['Tables']['posts']['Row']
}

// type Post = {
//     "id": string,
//     "title": string,
//     "body": string,
//     "priority": string,
//     "user_email": string
// }