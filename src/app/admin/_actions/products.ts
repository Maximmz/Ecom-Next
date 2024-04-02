"use server"

import db from "@/db/db"
import { redirect } from "next/navigation"
import { z } from "zod"

const addSchema = z.object({
    name: z.string().min(1).max(25),
    description: z.string().min(1).max(150),
    price: z.coerce.number().int().min(1)
})

export async function addProduct(formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if( result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;
    db.product.create({data: {
        name: data.name,
        description: data.description,
        price: data.price,
    }})

}