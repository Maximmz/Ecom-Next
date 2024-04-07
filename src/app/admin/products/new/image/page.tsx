import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function image() {
  return (
    <div>
        
        <form>
            <div className="space-y-2">
                <Label htmlFor="name">URL</Label>
                <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="Product">Product</Label>
                <Input type="text" id="product" name="product" required />
                </div>
        </form>
    </div>
  )
}
