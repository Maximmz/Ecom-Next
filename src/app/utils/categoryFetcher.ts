"use server"
import db from "@/db/db";

interface Category {
    id: number;
    name: string;
    img: string;
}

export async function getCategories(): Promise<Category[]> {
    const categories = await db.category.findMany();

    // Format the categories data into the desired format
    const formattedCategories = categories.map(category => ({
        id: category.id,
        name: category.name || "N/A",
        img: category.img || "N/A"
    }));

    return formattedCategories;
}
