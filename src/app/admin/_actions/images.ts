"use server"
import db from "@/db/db"
import { redirect } from "next/navigation"
import { z } from "zod"

const addSchema = z.object({
    url: z.string().min(1),
    productId: z.coerce.number().int().min(1)
})

export async function addProduct(formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if( result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;
    await db.image.create({data: {
        url: data.url,
        productId: data.productId
        
    }})
redirect("/admin/products")
}