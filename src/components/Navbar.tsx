import Image from "next/image";
import Link from "next/link";
import { Button } from "./design-system";

export default function Navbar() {
  return (
    <nav className="w-full py-6 animate-fade-in">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center group hover:opacity-90 transition-opacity duration-300">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.svg"
                  alt="Logo part 1"
                  fill
                  className="object-contain"
                />

              </div>
              <h2 className="font-raleway font-semibold text-2xl ml-2 text-black transition-colors duration-300 group-hover:text-primary">Arise & Shine</h2>
            </Link>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <Link href="/about" className="font-raleway font-semibold text-lg text-black nav-link">
              About us
            </Link>
            <Link href="/reviews" className="font-raleway font-semibold text-lg text-black nav-link">
              Reviews
            </Link>
            <Link href="/services" className="font-raleway font-semibold text-lg text-black nav-link">
              Services
            </Link>
          </div>

          <div className="flex items-center">
            <Button
              variant="primary"
              size="md"
              href="/book"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 