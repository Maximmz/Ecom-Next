import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import db from "@/db/db";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Product } from "@prisma/client"
import { cache } from '@/lib/cache';
import { Suspense } from "react";

async function getNewestProducts() {
  return db.product.findMany({
    where: { available: true },
    take: 6,
  })
}
async function getMostPopularProducts()  {
    return db.product.findMany({
      where: { available: false },
      orderBy: { orderItems: { _count: "desc" } },
      take: 6,
    })
}


export default function Home() {

  return (
    <div className="flex justify-center flex-col">
      <ProductGridSection title="Newest Products" productsFetcher={getNewestProducts} />
      <ProductGridSection title="Popular Products" productsFetcher= {getMostPopularProducts} />
    <Button asChild>
          <Link href="/admin">
          Admin Dashboard
          </Link>
          </Button>
   </div>
  )
}

type ProductGridSectionProps = {
  title: string
  productsFetcher: () => Promise<Product[]>
}

function ProductGridSection( {productsFetcher, title,}: ProductGridSectionProps) {
  return (
    <div className="flex justify-center flex-col">
       <h1 className="flex text-4xl font-bold justify-center underline py-4">{title}</h1>
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-x-auto">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductSuspense productsFetcher={productsFetcher} />
        </Suspense>
      </div>

    </div>
  )
}
async function ProductSuspense({ productsFetcher}: {
  productsFetcher: () => Promise<Product[]>
}) {
  return (await productsFetcher()).map(product => (
    <ProductCard key={product.id} {...product}/>
  ))
}
