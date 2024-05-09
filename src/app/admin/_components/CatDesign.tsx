"use client"
import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
}

interface CatDesignProps {
    products: Product[];
}

export default function CatDesign({ products }: CatDesignProps) {
    const [selected, setSelected] = useState<Product[]>([]);
    function handleClick(product: Product) {
        setSelected([...selected, product]);
    }
    console.log(selected);
    return (
        <div>
            <div>CatDesign</div>
            {/* Render buttons based on products */}
            {products.map(product => (
                <Button key={product.id} onClick={() => handleClick(product)} className={selected.includes(product) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>
                    {product.name}
                </Button>
            ))}
        </div>
    );
}