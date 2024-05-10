// Categories.tsx
import React from 'react';
import db from "@/db/db";
import CatDesign from "../_components/CatDesign";

interface Product {
    id: number;
    name: string;
}

interface CategoriesProps {
    products: Product[];
}
async function getAllProducts() {
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
export default async function Categories() {
  const products = await getAllProducts();
    return (
        <div className="container">
            <h1 className="font-bold underline text-2xl">Add Products to Categories</h1>
            <div className="flex flex-wrap justify-center items-center bg-slate-100 max-w-full mt-4 rounded-lg h-64 md:h-36">
                {/* Render the CatDesign component and pass the products as props */}
                <CatDesign products={products} />
            </div>
        </div>
    );
}
