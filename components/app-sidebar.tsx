"use client";

import { InfoIcon, MessageCircle, Rainbow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTrainSubway } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";
import { IoMegaphoneOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { ThemeToggler } from "./theme-toggler";

const links = [
  {
    label: "CSL2 Board",
    href: "/cls2-board",
    icon: (
      <IoMegaphoneOutline className="text-pumpkin-700 dark:text-pumpkin-100 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "TFL Line Status",
    href: "/tfl-line-status",
    icon: (
      <HiStatusOnline className="text-pumpkin-700 dark:text-pumpkin-100 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Rainbow Board",
    href: "/rainbow-board",
    icon: (
      <Rainbow className="text-pumpkin-700 dark:text-pumpkin-100 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Current Messages",
    href: "/current-messages",
    icon: (
      <MessageCircle className="text-pumpkin-700 dark:text-pumpkin-100 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Staff LDB",
    href: "/staff-ldb",
    icon: (
      <FaTrainSubway className="text-pumpkin-700 dark:text-pumpkin-100 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export function AppSideBar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white dark:bg-dark-shade-600 border-b dark:text-pumpkin-50">
        <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 text-pumpkin-900 dark:text-pumpkin-50">
            <Link href={"/"} className="bg-pumpkin-500 rounded-full p-1">
              <Image src={"/logo2.svg"} alt="logo" width={50} height={50} />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Service Management</h1>
              <p className="text-sm text-pumpkin-300 dark:text-pumpkin-100">
                Durban Dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm flex flex-col items-end font-semibold text-pumpkin-900 dark:text-pumpkin-50">
              STAMFORD HILL
              <span className="text-sm text-pumpkin-300 dark:text-pumpkin-100">
                ARRIVAL RAIL LONDON
              </span>
            </p>
            <Button variant="ghost" size="icon">
              <InfoIcon className="size-6 text-pumpkin-900 dark:text-pumpkin-50" />
            </Button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-dark-shade-500 w-full flex-1 max-w-7xl mx-auto border border-pumpkin-200 dark:border-pumpkin-800 overflow-hidden min-h-screen"
        )}
      >
        <Sidebar open={isOpen} setOpen={setIsOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <ThemeToggler />
            <SidebarLink user />
            <SidebarLink />
          </SidebarBody>
        </Sidebar>
        {children}
      </div>
    </div>
  );
}
