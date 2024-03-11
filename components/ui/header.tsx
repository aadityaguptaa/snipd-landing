import Link from "next/link";
import MobileMenu from "./mobile-menu";
import logo from "../../public/images/snipd_logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4" >
            {/* Logo */}
            <Link href="https://chromewebstore.google.com/detail/snipd/bbecdkolbddjmkmdkbkjlmaceodoaljm" className="block" aria-label="Cruip">
              <Image
                width={50}
                height={50}
                alt="Picture of the author"
                src={logo}
              />
              
            </Link>

            
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow"></nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
