"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Nav({children}: {children: ReactNode}) {
    return ( <nav className="bg-amber-200 border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1714053356/favicon_l2rb2i.ico" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-amber-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
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