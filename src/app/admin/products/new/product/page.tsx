"use client"
import { addProduct } from '@/app/admin/_actions/products'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export default function ProductForm() {
  const [error, action] = useFormState(addProduct, {})
  return (
    <div>
         <form action={action}>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
                {error.name && <div className='text-destructive'>{error.name}</div>}          
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input type="text" id="image" name="image" required />
                {error.image && <div className='text-destructive'>{error.image}</div>}          
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input 
                type="number" 
                id="price" 
                name="price" 
                required 
                />
                {error.price && <div className='text-destructive'>{error.price}</div>} 
            </div>
            <SubmitButton />
        </form>
    </div>
  )
}
function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button type="submit" disabled={pending}>{pending ? "Adding" : "Add Products" }</Button>
  }
