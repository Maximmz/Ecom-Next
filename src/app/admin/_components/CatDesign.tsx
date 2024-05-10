"use client"
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';
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
        if (selected.includes(product)) {
            // If the product is already selected, remove it
            setSelected(selected.filter(item => item !== product));
        } else {
            // If the product is not selected, add it
            setSelected([...selected, product]);
        }
    }
    console.log(selected);
    return (
        <div>
            {/* Render buttons based on products */}
            {products.map(product => (
                <Button key={product.id} onClick={() => handleClick(product)} className={selected.includes(product) ? 'bg-slate-600' : 'bg-slate-400'}>
                    {product.name}
                    {selected.includes(product) ? <span className="ps-2"><X size={16} strokeWidth={2.25} /></span> : <span></span>} 
                </Button>
            ))}
        </div>
    );
}