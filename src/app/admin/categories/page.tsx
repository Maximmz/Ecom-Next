"use client"
import React, { useEffect, useState } from 'react';
import db from "@/db/db";
import CatDesign from "../_components/CatDesign";
import CategoryComponent from '../_components/Category';
import {getProducts} from "../../utils/productFetcher";



const Categories: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            const products = await getAllProducts();
            setProducts(products);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="font-bold underline text-2xl">Add Products to Categories</h1>
            <div className="flex flex-wrap justify-center pt-8 bg-slate-100 max-w-full mt-4 rounded-lg h-[80vh] md:h-[80vh]">
                {/* Render the CatDesign component and pass the products as props */}
                <CatDesign products={products} />
            </div>
            <CategoryComponent />
        </div>
    );
}

export default Categories;
