"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
  {
    title: "All events",
    href: "/",
  },
  {
    title: "Create event",
    href: "/create-event",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mx-2 mt-10 flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-full border border-neutral-700 bg-neutral-800 p-4 lg:mx-auto">
      <Link href="/">
        <Home className="size-6 opacity-75 transition hover:opacity-100" />
      </Link>

      <nav>
        <ul className="flex items-center gap-x-2">
          {links.map((link) => (
            <li key={link.title}>
              <Button
                asChild
                variant={`${link.href === pathname ? "default" : "secondary"}`}
                size="sm"
              >
                <Link href={link.href}>{link.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
