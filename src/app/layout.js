//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md py-9 px-6 fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold text-white">
              VinUniPQC
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/people" className="text-white hover:text-black">People</Link></li>
              <li><Link href="/publication" className="text-white hover:text-black">Publications</Link></li>
              <li><Link href="/blog" className="text-white hover:text-black">Blog</Link></li>
              <li><Link href="/contact" className="text-white hover:text-black">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main className="flex-grow pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
          <p>&copy; {new Date().getFullYear()} VinUniPQC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
