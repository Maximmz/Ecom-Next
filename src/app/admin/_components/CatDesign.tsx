"use client"
import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';

// Define a type for the product
type Product = string;

export default function CatDesign() {
    const [products, setProducts] = useState<Product[]>([]);

    // Modify handleClick to accept a parameter of type Product
    function handleClick(product: Product) {
        // Use spread operator to copy existing products array and append the new product
        setProducts([...products, product]);
    }
    function handleReset() {
        setProducts([]);
    }
    console.log(products);

    return (
        <div>
        {/* Pass the product information to handleClick */}
        <Button onClick={() => handleClick("This Product")} className={products.includes("This Product") ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>This Product</Button>
        <Button onClick={() => handleClick("That Product")} className={products.includes("That Product") ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>That Product</Button>
        <Button onClick={() => handleClick("Those Product")} className={products.includes("Those Product") ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>Those Product</Button>
        <Button onClick={() => handleClick("Their Product")} className={products.includes("Their Product") ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>Their Product</Button>
        <Button onClick={() => handleReset()}>RESET</Button>
    </div>
    );
}