"use server"
import db from "@/db/db"
import { redirect } from "next/navigation";
import { z } from "zod"

const updateSchema = z.object({
    id: z.coerce.number().int().min(1),
    stock: z.coerce.number().int().min(0),
});

export async function updateProductStock(id: number, stock: number) {
    const result = updateSchema.safeParse({ id, stock });
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
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