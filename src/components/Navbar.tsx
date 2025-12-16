import { FC } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'; // from shadcn setup
import { Button } from '@/components/ui/button'; // shadcn button

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center bg-neutral-900 p-4 text-white">
      <div className="text-xl font-bold">MyWebsite</div>
      <ul className="flex space-x-4 items-center">
        <li>
          <Link href="/" className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 rounded">
            Blog Listing
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 rounded">
            About
          </Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Contact ▾</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-800 text-white">
              <DropdownMenuItem>Email: example@mail.com</DropdownMenuItem>
              <DropdownMenuItem>Phone: +1234567890</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
