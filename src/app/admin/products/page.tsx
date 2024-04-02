import { Button } from "@/components/ui/Button";
import { PageHeader } from "../_components/PageHeader";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { addProduct } from "../_actions/products";
import { Textarea } from "@/components/ui/textarea";

export default function AdminProductsPage() {
    return <>
    <div className="flex justify-between gap-4 items-center">
    <PageHeader> Products</PageHeader>
    <div className="">
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Images</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Image</DialogTitle>
          <DialogDescription>
            Add Images for Products in the database
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input id="url" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product" className="text-right">
              Product
            </Label>
            <Input id="product" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Products</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] relative">
        <form action={addProduct}>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
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
            </div>
            <Button type="submit">Add Products</Button>
        </form>

      </DialogContent>
    </Dialog>
    </div>
    </div>
    </>
}