"use client"
import { Button } from "@/components/ui/Button"
import { addCategory } from "../../_actions/category"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export default function CategoryAdd() {
    const [error, action] = useFormState(addCategory, {})
  return (
    <div className="bg-slate-400 rounded-2xl flex flex-col items-center justify-center py-8">
        <h1 className="text-center text-white text-3xl font-bold">Add a new Category</h1>
        <form action={action} className="pt-6 w-full max-w-sm">
            <div className="space-y-2">
                <Label htmlFor="name">Category</Label>
                <Input type="text" id="name" name="name" required />        
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image Link</Label>
                <Input type="text" id="img" name="img" required />        
            </div>
            <SubmitButton />
        </form>
    </div>
  )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button type="submit" className="bg-slate-600 hover:bg-slate-700 mt-4" disabled={pending}>{pending ? "Adding" : "Add Category" }</Button>
}
