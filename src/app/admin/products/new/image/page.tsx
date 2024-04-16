
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import db from "@/db/db";
import { Button } from '@/components/ui/Button';
import { addImage } from '@/app/admin/_actions/images';


async function getProducts() {
  const products = await db.product.findMany();
  const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.name || "N/A", 
  }));
  return formattedProducts;
}

export default async function Image() {

  const data = await getProducts();
  const productItems = data.map(product => (
    <div key={product.id}  className="border">
      <p>ID: {product.id}</p>
      <p>Product: {product.name}</p>
    </div>
  ));



  return (
    <div>
      <form action={addImage}>
        <div className="space-y-2">
          <Label htmlFor="url">URL</Label>
          <Input type="text" id="url" name="url" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="productid">Product ID</Label>
          <Input type="text" id="productid" name="productid" required />
        </div>
        <SubmitButton />
      </form>
      <div className="grid grid-cols-4">{productItems}</div>
      </div>
  );
}

function SubmitButton() {
  return <Button type="submit">Add Image</Button>;
}