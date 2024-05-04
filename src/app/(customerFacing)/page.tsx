import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import { ProductCard } from "@/components/ProductCard";


export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-4xl font-bold pb-2">New Products</h1>
      <div className="flex justify-evenly flex-row gap-x-3">
      <ProductCard id="1" name="Big boi" price= {1000} description="xdxdxd" available={true} image="https://res.cloudinary.com/dvvcrxzud/image/upload/v1714497692/Blob_nnciyd.svg" />
      <ProductCard id="1" name="Big boi" price= {2500} description="xdxdxd" available={false} image="https://res.cloudinary.com/dvvcrxzud/image/upload/v1714497692/Blob_nnciyd.svg" />
      </div>
    <Button asChild>
          <Link href="/admin">
          Admin Dashboard
          </Link>
          </Button>

   </div>
  )
}
