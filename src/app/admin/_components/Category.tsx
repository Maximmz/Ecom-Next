import React, { useEffect, useState } from "react";
import { getCategories } from "@/app/utils/categoryFetcher";

interface Category {
    id: number;
    name: string;
    img: string;
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
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name} - {category.img}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryComponent;
