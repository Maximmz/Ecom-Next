import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { Nav, NavLink } from "@/components/Nav";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/collections">Collections</NavLink>
    <NavLink href="/about">About Us</NavLink>
  </Nav>
  

          <Providers>{children} </Providers>

          </>
         
}
