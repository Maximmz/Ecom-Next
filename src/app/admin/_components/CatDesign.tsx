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
    const [category, setCategory] = useState<string>('');

    function handleClick(product: Product) {
        if (selected.includes(product)) {
            setSelected(selected.filter(item => item !== product));
        } else {
            setSelected([...selected, product]);
        }
    }

    function handleSave() {
        const productIds = selected.map(product => product.id);
        localStorage.setItem("categories", JSON.stringify(productIds));
        console.log("Saved Product IDs:", productIds);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const productIds = JSON.parse(localStorage.getItem("categories") || "[]");
        
        // Create an object to save both the category name and the product IDs
        const categoryData = {
            categoryName: category,
            productIds: productIds
        };

        // Save the category data to localStorage
        localStorage.setItem("categoryData", JSON.stringify(categoryData));
        console.log("Category Data:", categoryData);

        // Clear the form
        setCategory('');
        setSelected([]);
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
            <Button onClick={handleSave} className="bg-slate-600 hover:bg-slate-700">Select Products</Button>

            {/* Form to input category name and submit */}
            <div className="bg-slate-400 flex justify-center h-36 items-center">
            <form onSubmit={handleSubmit} className="mt-4">
                <input 
                    type="text" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    placeholder="Category Name" 
                    className="border border-gray-400 p-2 mb-2"
                />
                <Button type="submit" className="bg-slate-600 hover:bg-slate-700">Add Category</Button>
            </form>
            </div>
        </div>
    );
}
