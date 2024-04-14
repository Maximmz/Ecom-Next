"use client"

import { Button } from "@/components/ui/Button";
import { updateProductStock } from '@/app/admin/_actions/stocks'
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
};
export const columns: ColumnDef<Product>[] = [
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

      const handleOpenChange = () => {
       updateProductStock(product.id, product.stock + stocks)
        
      };
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
              <Button onClick={handleOpenChange}>Save</Button>
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