"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { AlignRight, Loader2, LogOut, X } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarProvider, useSidebar } from "@/provider/sidebar-provider";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-pumpkin-100 dark:bg-pumpkin-800 w-[300px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "66px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-pumpkin-100 dark:bg-pumpkin-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <AlignRight
            className="text-pumpkin-800 dark:text-pumpkin-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-pumpkin-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-pumpkin-800 dark:text-pumpkin-200"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  user,
  className,
  ...props
}: {
  link?: Links;
  user?: boolean;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  const pathname = usePathname();

  return link ? (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar p-2 rounded",
        className,
        pathname === link?.href && "bg-pumpkin-300 dark:bg-pumpkin-700"
      )}
      {...props}
    >
      {link?.icon}

      <AnimatedSpan animate={animate} open={open} label={link.label} />
    </Link>
  ) : user ? (
    <AuthUser animate={animate} open={open} />
  ) : (
    <AuthButton animate={animate} open={open} />
  );
};

export const AnimatedSpan = ({
  animate,
  open,
  label,
}: {
  animate: boolean;
  open: boolean;
  label: string;
}) => {
  return (
    <motion.span
      animate={{
        display: animate ? (open ? "inline-block" : "none") : "inline-block",
        opacity: animate ? (open ? 1 : 0) : 1,
      }}
      className="text-pumpkin-700 dark:text-pumpkin-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
    >
      {label}
    </motion.span>
  );
};

const AuthButton = ({ animate, open }: { animate: boolean; open: boolean }) => {
  return (
    <SignOutButton>
      <button className="flex items-center gap-2">
        <LogOut className="text-pumpkin-700 dark:text-pumpkin-200 h-5 w-5 flex-shrink-0" />
        <AnimatedSpan animate={animate} open={open} label="Log Out" />
      </button>
    </SignOutButton>
  );
};

export const AuthUser = ({
  animate,
  open,
}: {
  animate: boolean;
  open: boolean;
}) => {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-2">
      <ClerkLoaded>
        <UserButton />

        <AnimatedSpan
          animate={animate}
          open={open}
          label={user?.firstName ?? ""}
        />
      </ClerkLoaded>

      <ClerkLoading>
        <Loader2 className="animate-spin size-8 text-pumpkin-400" />
      </ClerkLoading>
    </div>
  );
};
