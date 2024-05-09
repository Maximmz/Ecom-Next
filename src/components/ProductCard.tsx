import { formatCurrency } from "@/lib/formatters"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card"
import { Button } from "./ui/Button"
import Link from "next/link"
import Image from "next/image"
import { CircleCheckBig, OctagonX } from "lucide-react"
import { cache } from "@/lib/cache"
import db from "@/db/db"



type ProductCardProps = {
  id: number
  name: string
  price: number
  available: boolean
  image: string
}

export function ProductCard({
  id,
  name,
  price,
  available,
  image,
}: ProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col relative max-w-full">
      <div className="relative aspect-video">
       {image == "No image" 
       ? 
       <div className="flex w-full h-full justify-center items-center">
        <span className="border border-black rounded-xl px-2 py-2">No Image!</span>
        </div>
         :
         <Image src={image} fill alt={name} />
          } 
      </div>
      <div className="flex gap-x-2 absolute top-0 right-2">
      Available?
      {available ?
      <CircleCheckBig />
       : <OctagonX />}
      </div>
      <CardHeader>
        <CardTitle className="text-sm">{name}</CardTitle>
        <CardDescription>{formatCurrency(price)}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  )
}