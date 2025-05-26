import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white/60 backdrop-blur-lg fixed w-full z-10">
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Fusion Mail" width={40} height={40} />
      <span className="text-xl font-bold text-primary">Fusion Mail</span>
    </Link>
    <ul className="flex gap-6 text-gray-700 font-medium">
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
