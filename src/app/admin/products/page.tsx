import { Product, columns } from "../_components/Columns"
import { DataTable } from "../_components/DataTable"
import db from "@/db/db"
import { Button } from "@/components/ui/Button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";

async function getProducts(): Promise<Product[]> {
  const products = await db.product.findMany();

// Format the products data into the desired table format
const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.name || "N/A", 
    price: product.price || 0, 
    stock: product.stock || 0,
    available: product.available || false
}));

return formattedProducts;
  }

export default async function AdminProductsPage() {
  const data = await getProducts()
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>

    </>
}