"use client"
import { addCategory } from "../_actions/category"
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Categories from "./Category";

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
    const [error, action] = useFormState(addCategory, {})



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
    


    return (
        <div className='flex flex-col'>
            {/* Form to input category name and submit */}
            <div className="bg-slate-400 flex justify-center h-62 items-center rounded-xl">
            <form action={action} className="p-16">
            <div className="space-y-2">
                <Label htmlFor="name">Category</Label>
                <Input type="text" id="name" name="name" required />        
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image Link</Label>
                <Input type="text" id="img" name="img" required />        
            </div>
                <SubmitButton />
            </form>
            </div>
            <div>
                <div className="flex justify-center text-3xl font-extrabold pt-4">
                    Products
                </div>
                {/* Render buttons based on products */}
                {products.map(product => (
                    <Button key={product.id} onClick={() => handleClick(product)} className={selected.includes(product) ? 'bg-slate-600' : 'bg-slate-400'}>
                        {product.name}
                        {selected.includes(product) ? <span className="ps-2"><X size={16} strokeWidth={2.25} /></span> : <span></span>} 
                    </Button>
                ))}
            </div>
            <Button onClick={handleSave} className="bg-slate-600 hover:bg-slate-700">Select Products</Button>

            
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button type="submit" className="bg-slate-600 hover:bg-slate-700" disabled={pending}>{pending ? "Adding" : "Add Category" }</Button>
  }
