"use client"

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Minus, Plus } from "lucide-react";
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
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
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
        setMenuOpen(false)
        
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
            </DropdownMenuLabel>

            <DropdownMenuItem className="flex justify-center items-center">
              <Button
                className="h-12 w-12"
                variant="ghost"
                onClick={decrement}
              >
                <Minus/>
              </Button>
              <div className="border w-6 h-4 flex justify-center items-center rounded-md">
                {product.stock + stocks}
              </div>
              <Button
                className="h-12 w-12"
                variant="ghost"
                onClick={increment}
              >
                <Plus />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];