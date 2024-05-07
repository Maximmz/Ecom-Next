import React from 'react'
import db from "@/db/db";

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
        <div className="flex flex-wrap justify-center items-center bg-slate-100 max-w-full mt-4 rounded-lg h-36">
            {products.map(product => (<div className="px-2" key={product.id}>
              <div className="bg-slate-300 rounded-lg p-2 active:bg-slate-400 cursor-pointer">  
                {product.name}
                </div>
                </div>))}

        </div>



    </div>
  )
}