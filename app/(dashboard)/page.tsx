import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  // CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>
        </CardContent>
      </Card>

      <div className='p-5 flex flex-col justify-center items-center gap-5'>
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          The Training Posts
        </h2>

        <Link href="/posts">
          <Button>View Posts</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New member of the web dev team...</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New website live!</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>
        </CardContent>
      </Card>
    </main>
  )
}