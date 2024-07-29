"use client"
import React, { useEffect, useState } from "react";
import { getCategories } from "@/app/utils/categoryFetcher";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface Category {
    id: number;
    name: string;
    img: string;
}

function selectCategory(id: string) {
    localStorage.setItem("selected_category", id);
}

const CategoryComponent: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchData() {
            const categories = await getCategories();
            setCategories(categories);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-extrabold">Categories</h2>
            <ul>
                {categories.map(category => (
                    <Card key={category.id} className="m-2">
                        <CardHeader >
                            <Image src={category.img} alt={category.name} width={200} height={200}/>
                        </CardHeader>
                        <CardTitle className="ps-4">
                            {category.name}
                        </CardTitle>
                        <CardDescription className="ps-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda hic, iste consectetur cupiditate rem, nemo cumque ducimus minus ab eveniet eum molestias illum labore harum, expedita enim culpa esse?
                        </CardDescription>
                        <Button onClick={() => selectCategory(category.id.toString())}>Select</Button>
                    </Card>
                ))}
            </ul>
        </div>
    );
};

export default CategoryComponent;
