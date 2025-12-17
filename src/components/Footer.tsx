import Link from "next/link"
import { Github, Facebook, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-accent text-foreground py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

        <div className="flex gap-5">
          <Link
            href="https://github.com/Mr-BlackHat-lab"
            target="_blank"
            className="hover:text-accent hover:bg-accent-foreground px-2 py-2 rounded-2xl transition"
          >
            <Github size={22} />
          </Link>

          <Link
            href="https://facebook.com/parahalad"
            target="_blank"
            className="hover:text-accent hover:bg-accent-foreground px-2 py-2 rounded-2xl transition"
          >
            <Facebook size={22} />
          </Link>

          <Link
            href="https://instagram.com/_prahalad_singh/"
            target="_blank"
            className="hover:text-accent hover:bg-accent-foreground px-2 py-2 rounded-2xl transition"
          >
            <Instagram size={22} />
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
