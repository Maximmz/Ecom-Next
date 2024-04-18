"use client"
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/Button';
import { addImage } from '@/app/admin/_actions/images';
import { useFormState} from 'react-dom'


export default function Image() {
  const [error, action] = useFormState(addImage, {})
  return (
    <div>
      <form action={action}>
        <div className="space-y-2">
          <Label htmlFor="url">URL</Label>
          <Input type="text" id="url" name="url" required />
          {error.url && <div className='text-destructive'>{error.url}</div>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="productId">Product ID</Label>
          <Input type="number" id="productId" name="productId" required />
        </div>
        <Button type="submit">Add Image</Button>
      </form>
      </div>
  );
}