"use server"
import db from "@/db/db";

interface Product {
    id: number;
    name: string;
}

export async function getProducts(): Promise<Product[]> {
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