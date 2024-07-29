"use server"
export {};

import db from "@/db/db"
import { redirect } from "next/navigation"
import { z } from "zod"

const categorySchema = z.object({
    name: z.string().min(1).max(25),
    img: z.string().min(1)
})

export async function addCategory(prevState: unknown, formData: FormData) {
    try {
    const result = categorySchema.safeParse(Object.fromEntries(formData.entries()))
    if( result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;
    await db.category.create({data: {
        name: data.name,
        img: data.img
        
    }})

} catch(error) {
    console.error('Error adding category:', error);
    return { message: 'Failed to add category' };
}
redirect("/admin/categories")
}