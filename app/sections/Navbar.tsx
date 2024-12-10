"use client";

import Image from "next/image";
import logoImage from "@/public/assets/images/logo.png";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isSticky = true;

  return (
    <header className={twMerge("absolute z-50 w-full", isSticky === true && "top-0 fixed")}>
      <div className="container max-w-5xl mx-auto p-4">
        <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center  p-2 px-4 md:pr-2 ">
            <Link href="/">
              <Image
                src={logoImage}
                alt="Furrow Logo"
                height={90}
                width={90}
                className="h-9 md:h-auto w-auto"
              />
            </Link>

            <nav className="lg:flex justify-center items-center hidden">
              <div className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col items-center justify-center gap-4 py-6">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className="py-2">
                      {link.label}
                    </a>
                  ))}
                  <Button variant="secondary">Log In</Button>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
