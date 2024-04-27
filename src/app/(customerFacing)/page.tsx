import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import Carousel from './_components/Carousel'

export default function Home() {
  return (
    <div className="max-w-7xl flex justify-center flex-col">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, aliquid voluptatem fugit assumenda expedita enim quos, consequatur doloribus aliquam accusantium necessitatibus eius? Mollitia tempore, ad nesciunt molestiae unde distinctio repellat similique quia doloribus voluptate architecto ducimus quaerat ex in pariatur sunt, eum possimus rem!
    <br></br>
    <Button asChild>
          <Link href="/admin">
          Admin Dashboard
          </Link>
          </Button>
          <Carousel />
   </div>
  )
}
