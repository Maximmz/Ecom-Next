"use server"
import db from "@/db/db";

interface Product {
    id: number;
    name: string;
}

export async function getProducts(): Promise<Product[]> {
    try {
        const products = await db.product.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: {
              id: 'asc',
            },
        });
        return products;
      } catch (error) {
        console.error("Error retrieving products:", error);
        throw error;
      }
    }