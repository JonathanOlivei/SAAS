"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../../../components/ui/button";
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings,
} from "lucide-react";
import Link from "next/link";
import logoImg from "../../../../../public/logo-odonto.png";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
} from "../../../../components/ui/collapsible";

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={clsx(
          "flex flex-col border-r bg-background transition-all durantion-300 p-4 h-full",
          {
            "w-20": isCollapsed,
            "w-64": !isCollapsed,
            "hidden md:flex md:fixed": true,
          },
        )}
      >
        {/* server para esconder a imagem quando a sadebar ficar recolhida */}
        <div>
          {!isCollapsed && (
            <Image
              src={logoImg}
              alt="Logo do odontopro"
              priority
              quality={100}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          )}
        </div>
        <Button
          className="bg-gray-100 hover:gray-50 text-zinc-900 self-end mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)} // essa Arrow funcition no button é responsavel por esconder a sidebar do site
        >
          {isCollapsed ? (
            <ChevronLeft className="w-12 h-12"></ChevronLeft>
          ) : (
            <ChevronRight className="w-12 h-12"></ChevronRight>
          )}
        </Button>

        {/* Mostrar somente quando o sidebar esta recolhido */}

        {isCollapsed && (
          <nav className="flex flex-col gap-1 overflow-hidden mt-2">
            <SidebarLink
              href="/dashboard"
              label="Agendamentos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<CalendarCheck2 className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/services"
              label="Serviços"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<CalendarCheck2 className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/profile"
              label="Meu perfil"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Settings className="w-6 h-6" />}
            />

            <SidebarLink
              href="/dashboard/plans"
              label="Planos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Banknote className="w-6 h-6" />}
            />
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Painel
              </span>

              <SidebarLink
                href="/dashboard"
                label="Agendamentos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<CalendarCheck2 className="w-6 h-6" />}
              />
              <SidebarLink
                href="/dashboard/services"
                label="Serviços"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<CalendarCheck2 className="w-6 h-6" />}
              />

              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Configurações
              </span>
              <SidebarLink
                href="/dashboard/profile"
                label="Meu perfil"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Settings className="w-6 h-6" />}
              />

              <SidebarLink
                href="/dashboard/plans"
                label="Planos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Banknote className="w-6 h-6" />}
              />
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>
      <div
        className={clsx("flex flex-1 flex-col transition-all duration-300", {
          "md:ml-20": isCollapsed,
          "md:ml-64": !isCollapsed,
        })}
      >
        <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-white px-4 md:px-6">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Abrir menu"
                  />
                }
              >
                <List className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="right" className="sm:max-w-xs text-black">
                <SheetTitle>OdontoPRO</SheetTitle>
                <SheetDescription>Menu administrativo.</SheetDescription>

                <nav className="grid gap-2 text-base pt-5">
                  <SidebarLink
                    href="/dashboard"
                    label="Agendamentos"
                    pathname={pathname}
                    isCollapsed={isCollapsed}
                    icon={<CalendarCheck2 className="w-6 h-6" />}
                  />

                  <SidebarLink
                    href="/dashboard/services"
                    label="Serviços"
                    pathname={pathname}
                    isCollapsed={isCollapsed}
                    icon={<Folder className="w-6 h-6" />}
                  />

                  <SidebarLink
                    href="/dashboard/profile"
                    label="Meu perfil"
                    pathname={pathname}
                    isCollapsed={isCollapsed}
                    icon={<Settings className="w-6 h-6" />}
                  />

                  <SidebarLink
                    href="/dashboard/plans"
                    label="Planos"
                    pathname={pathname}
                    isCollapsed={isCollapsed}
                    icon={<Banknote className="w-6 h-6" />}
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* O título permanece visível em todas as telas */}
          <h1 className="text-base font-semibold md:text-lg">Menu OdontoPRO</h1>
        </header>

        <main className="flex-1 px-2 py-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsed: boolean;
}

function SidebarLink({
  href,
  icon,
  isCollapsed,
  label,
  pathname,
}: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
          {
            "text-white bg-blue-500": pathname === href,
            "text-gray-700 hover:bg-gray-100": pathname !== href,
          },
        )}
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}
