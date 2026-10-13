"use client";

import Link from "next/link";
import { useState } from "react";
import { LogIn, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../../components/ui/button";

const navItems = [{ href: "#profissionais", label: "Profissionais" }];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const session = null;

  function NavLinks() {
    return (
      <>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-base inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}

        {session ? (
          <Link
            href="/dashboard"
            className="flex-items-center justify-center gap-2"
          >
            Acessar Clinica
          </Link>
        ) : (
          <Button>
            <LogIn />
            Fazer Login
          </Button>
        )}
      </>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[999] bg-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-zinc-900"
        >
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden items-center space-x-4 md:flex">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-black hover:bg-gray-100 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="z-[9999] w-[240px] sm:w-[300px]"
          >
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Veja nossos links</SheetDescription>

            <nav className="mt-6 flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
