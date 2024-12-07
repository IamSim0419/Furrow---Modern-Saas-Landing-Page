import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import localFont from "next/font/local"
import Navbar from "./components/Navbar";


const inter = Inter({
  subsets: ['latin'],
})

export const rubikMono = localFont({
  src: "./fonts/RubikMonoOne-Regular.ttf",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Furrow",
  description: "Seamless design, made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
