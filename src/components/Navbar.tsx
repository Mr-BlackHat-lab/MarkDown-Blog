"use client";
import { FC } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';


const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-accent border rounded-2xl p-4 text-foreground">
      <div className="text-xl font-bold">Markdown Blog</div>
      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li>
          <Link href="/" className="hover:bg-accent-foreground hover:text-accent h-9 px-4 py-2 rounded-2xl transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:bg-accent-foreground hover:text-accent h-9 px-4 py-2 rounded-2xl transition">
            Blog Listing
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:bg-accent-foreground hover:text-accent h-9 px-4 py-2 rounded-2xl transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:bg-accent-foreground hover:text-accent h-9 px-4 py-2 rounded-2xl transition">
            Contact
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="Open menu" className="rounded-2xl h-9 w-9 flex items-center justify-center hover:bg-accent-foreground hover:text-accent transition">
            <Menu className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog">Blog Listing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Menu</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
