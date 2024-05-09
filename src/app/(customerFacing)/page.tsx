import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import db from "@/db/db";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Product } from "@prisma/client"
import { cache } from '@/lib/cache';
import { Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';



async function getProducts(): Promise<Product[]> {
  const products = await db.product.findMany();

// Format the products data into the desired table format
const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.name || "N/A", 
    description: product.description || "N/A",
    price: product.price || 0, 
    available: product.available || false,
    stock: product.stock || 0,
    order: product.order || 0,
    image: product.image || "N/A"
}));

return formattedProducts;
  }

  async function getNewestProducts()  {
    return db.product.findMany({
      where: { available: false },
      orderBy: { orderItems: { _count: "desc" } },
      take: 6,
    })
}
async function getMostPopularProducts()  {
    return db.product.findMany({
      where: { available: true },
      orderBy: { orderItems: { _count: "desc" } },
      take: 6,
    })
}


export default function Home() {


  return (
    <div className="flex justify-center flex-col">
     

     
     <ProductGridSection title="Newest Products" productsFetcher= {getNewestProducts} />
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
       <div className="flex justify-center basis-2">
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
async function ProductSuspense({ productsFetcher }: {
  productsFetcher: () => Promise<Product[]>
}) {
  const products = await productsFetcher();
  const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.name || "N/A",
    description: product.description || "N/A",
    price: product.price || 0,
    available: product.available || false,
    stock: product.stock || 0,
    order: product.order || 0,
    image: product.image || "N/A"
  }));

  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {formattedProducts.map(product => (
          <CarouselItem key={product.id} className="basis-1/3">
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
