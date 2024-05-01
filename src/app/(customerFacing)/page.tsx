import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import Carousel from './_components/Carousel'
import Hero from './_components/Hero'

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
         <Carousel />
    <Button asChild>
          <Link href="/admin">
          Admin Dashboard
          </Link>
          </Button>

   </div>
  )
}
