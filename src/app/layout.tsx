import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  return (
    <html lang="en" className={openSans.className}>
      <body className="min-h-screen">

          <Providers>{children} </Providers>
          </body>
    </html>
  );
}
