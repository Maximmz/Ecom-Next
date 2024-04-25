"use client"
import { Button } from "@/components/ui/Button";
import { updateAvailableProduct, updateProductStock } from '@/app/admin/_actions/products'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  available: boolean;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "available",
    header: "On website",
    cell: ({ row }) => {
      const available: boolean = row.getValue("available")
      
      if (typeof available === "boolean") {
        // Capitalize the first letter of the text
        return (
          <div className={available ? "bg-amber-300 w-16 rounded-xl ps-1" : "bg-red-500 w-16 rounded-xl"}>
            {available ? "Available" : "Removed"}
          </div>
        );
      } else {
        return null; // Return null if availability is not a valid string
      }
    }
  },
  {
    accessorKey: "price",
    header: () => <div className="">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR",
      }).format(price)
 
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "Add Stock",
    cell: ({ row }) => {
      const [stocks, setStocks] = useState(0);
      const increment = () => {
        setStocks(stocks + 1);
      };
      const decrement = () => {
        if (stocks > 0) {
          setStocks(stocks - 1);
        }
      };
      const product = row.original;
      const [menuOpen, setMenuOpen] = useState(false);
      
      //Stock updating API
      const handleOpenChange = () => {
       updateProductStock(product.id, product.stock + stocks)
        
      };
      const handleAvailable = () => {
        updateAvailableProduct(product.id, product.available)
      }
      return (
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex flex-col items-center">
              <div>
                <div className="flex justify-center">
                  Add Stock
                  </div>
                  <div className="flex">
                  <div>
                  <Button
                className="h-8 w-12"
                variant="ghost"
                onClick={decrement}
              >
                <Minus/>
              </Button>
                  </div>
                  <div>
                  <Button
                className="h-8 w-12"
                variant="ghost"
                onClick={increment}
              >
                <Plus/>
              </Button>
                  </div>
                  </div>
              </div>
             <div>
               <Button onClick={handleOpenChange}>
                Update
                </Button>
                <Button
                onClick={handleAvailable}
                 className={product.available ? "bg-amber-600 hover:bg-amber-500" : "bg-slate-500 hover:bg-slate-400"}>
                  {product.available ? "Deactivate" : "Activate" }
                </Button>
             </div>
             <Button variant="destructive">
              Delete
              </Button>
            </DropdownMenuLabel>

            <DropdownMenuItem className="flex justify-center items-center">
              <div className="border bg-slate-200 w-32 h-10 flex justify-center items-center rounded-md">
                {product.stock + stocks}
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];