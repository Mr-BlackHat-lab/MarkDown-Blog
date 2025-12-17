import { FC } from 'react';
import Link from 'next/link';


const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-accent border rounded-2xl p-4 text-foreground">
      <div className="text-xl font-bold">Markdown Blog</div>
      <ul className="flex space-x-4 items-center">
        <li>
          <Link href="/" className="hover:bg-accent-foreground hover:text-accent dark:hover:bg-accent/50 h-9 px-4 py-2 rounded-2xl transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:bg-accent-foreground hover:text-accent dark:hover:bg-accent/50 h-9 px-4 py-2 rounded-2xl transition">
            Blog Listing
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:bg-accent-foreground hover:text-accent dark:hover:bg-accent/50 h-9 px-4 py-2 rounded-2xl transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:bg-accent-foreground hover:text-accent dark:hover:bg-accent/50 h-9 px-4 py-2 rounded-2xl transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
