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

            setSelected(selected.filter(item => item !== product));
        } else {
            setSelected([...selected, product]);
        }
   
    }
    function handleSave(selected: Product[]) {
        
        const productIds = selected.map(product => product.id);
        
        localStorage.setItem("categories", JSON.stringify(productIds));

        console.log("Saved Product IDs:", productIds);
    }

    return (
        <div className='flex flex-col'>
            <div>
            {/* Render buttons based on products */}
            {products.map(product => (
                <Button key={product.id} onClick={() => handleClick(product)} className={selected.includes(product) ? 'bg-slate-600' : 'bg-slate-400'}>
                    {product.name}
                    {selected.includes(product) ? <span className="ps-2"><X size={16} strokeWidth={2.25} /></span> : <span></span>} 
                </Button>
            ))}
            </div>
            <Button onClick= {() => handleSave(selected)} className="bg-slate-600 hover:bg-slate-700">Select Products</Button>
        </div>
    );
}