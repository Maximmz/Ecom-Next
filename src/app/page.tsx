import { Button } from "@/components/ui/Button"
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]/route"
import { User } from "./user"
import Link from "next/link"


export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="max-w-7xl flex justify-center flex-col">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, aliquid voluptatem fugit assumenda expedita enim quos, consequatur doloribus aliquam accusantium necessitatibus eius? Mollitia tempore, ad nesciunt molestiae unde distinctio repellat similique quia doloribus voluptate architecto ducimus quaerat ex in pariatur sunt, eum possimus rem!
    <br></br>
    <Button variant="default" className="max-w-48"> Average button </Button>
    <h2 className="ps-3 text-3xl text-zinc-700">Client call</h2>
    <User />
    <Button asChild className="max-w-48">
      <Link href="/admin">Dashboard</Link>
    </Button>
    </div>
  )
}
