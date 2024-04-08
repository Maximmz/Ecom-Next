"use client"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/Button'

export default function image() {
    const [position, setPosition] = useState("bottom")
    console.log(position);
  return (

    <div>
        
        <form>
            <div className="space-y-2">
                <Label htmlFor="name">URL</Label>
                <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Product</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
                </div>
        </form>
    </div>
  )
}
