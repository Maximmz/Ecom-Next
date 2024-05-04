"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"
import { Button } from "./ui/Button"
import React, {useState} from 'react';

export function Nav({children}: {children: ReactNode}) {
    const [collapse, setCollapse] = useState(false)
    function handleClick() {
        setCollapse(!collapse);
    }
    return ( <nav className="bg-amber-200">
    <div className=" max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1714053356/favicon_l2rb2i.ico" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
      </div>
      <Button onClick={handleClick} variant="default" className="inline-flex items-center p-2 w-10 h-10 justify-center bg-slate-500 rounded-lg md:hidden hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </Button>
      <div className={collapse ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
        <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg bg-amber-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li className="flex flex-col items-center md:flex-row">
            {children}
        </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname()
    return <Link {...props } className={cn("p-4 rounded-full hover:bg-amber-300 hover:text-secondary-foreground focus-visible:hover:bg-secondary focus-visible:hover:text-secondary-foreground",
    pathname=== props.href && "bg-amber-400 text-foreground")} />
}