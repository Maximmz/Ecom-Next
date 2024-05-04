import "../globals.css";
import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
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
  

   {children} 

          </>
         
}
