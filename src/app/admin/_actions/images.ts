"use server"
import db from "@/db/db";
import { redirect } from "next/navigation";
import { z } from "zod";

// Define the schema for form data
const addSchema = z.object({
    url: z.string().min(1),
    productId: z.number().int().min(1)
});


// Function to add an image to the database
export async function addImage(prevState: unknown, formData: FormData) {
    console.log("Function works");

    // Log form data
    console.log("Form Data:", formData);

    // Convert productId to a number
    const productId = Number(formData.get("productId"));

    // Validate form data
    const result = addSchema.safeParse({
        url: formData.get("url"),
        productId: productId
    });

    if (!result.success) {
        console.log("Validation failed");
        console.log("Validation Errors:", result.error.formErrors.fieldErrors);
        return result.error.formErrors.fieldErrors;
    }
    
    console.log("Validation successful");
    const data = result.data;
    console.log("FormData:", data);
        await db.image.create({
            data: {
                url: data.url,
                productId: data.productId
            }
        });

        console.log("Image created successfully");
        redirect("/admin/products");
    
}