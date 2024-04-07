"use client"
import { Button } from "@/components/ui/Button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";

export default function AdminProductsPage() {
    return <>
    <div className="flex justify-between gap-4 items-center">
    <PageHeader> Products</PageHeader>
    <div className="">
    <Button asChild>
          <Link href="/admin/products/new/image">
          Add Image
          </Link>
          </Button>
      
    
        <Button asChild>
          <Link href="/admin/products/new/product">
          Add Products
          </Link>
          </Button>
      
    </div>
    </div>
    </>
}