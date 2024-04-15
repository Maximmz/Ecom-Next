"use server"
export {};


import db from "@/db/db"
import { redirect } from "next/navigation"
import { z } from "zod"

//Schema for adding products
const addSchema = z.object({
    name: z.string().min(1).max(25),
    description: z.string().min(1).max(150),
    price: z.coerce.number().int().min(1),
})

//Schema for updating stock
const stockSchema = z.object({
    id: z.coerce.number().int().min(1),
    stock: z.coerce.number().int().min(0),
});

//Schema for updating availability
const availableSchema = z.object({
    id:z.coerce.number().int().min(1),
    available: z.boolean()
})

//API for updating availability
export async function updateAvailableProduct(id: number, available: boolean) {
    const result = availableSchema.safeParse({id,available});
    if(result.success === false) {
        return result.error
    }
    const data = result.data;
    const newAvailability = !data.available;
    try {
        await db.product.update({
            where: {id: data.id},
            data: { available: newAvailability
            }
        })
        
    } catch (error) {
        // Handle error
        console.error('Error updating product stock:', error);
        return { message: 'Failed to update product stock' };
}
redirect("/admin/products")
}
//API for updating stock
export async function updateProductStock(id: number, stock: number) {
    const result = stockSchema.safeParse({ id, stock });
    if (result.success === false) {
        return result.error
    } 
  
    const data = result.data;
    try {
        
        // Find the product by ID and update its stock
        await db.product.update({
            where: { id: data.id },
            data: { stock: data.stock },
        });
        // Redirect to some page after successful update
    } catch (error) {
        // Handle error
        console.error('Error updating product stock:', error);
        return { message: 'Failed to update product stock' };
    }
    redirect("/admin")
}

//API for adding products
export async function addProduct(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if( result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;
    await db.product.create({data: {
        name: data.name,
        description: data.description,
        price: data.price,
    }})
redirect("/admin/products")
}