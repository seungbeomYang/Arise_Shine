'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "./design-system";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle menu animation and prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        // Animate menu in
        mobileMenuRef.current.style.opacity = '0';
        mobileMenuRef.current.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.opacity = '1';
            mobileMenuRef.current.style.transform = 'translateX(0)';
          }
        }, 10);
      } else {
        document.body.style.overflow = 'unset';
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-6 animate-fade-in relative z-50">
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
              <h2 className="font-raleway font-semibold text-2xl ml-2 text-black transition-colors duration-300 group-hover:text-primary">Arise & Shine Health</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 md:gap-12">
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

          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="md"
              href="/book"
            >
              Book now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-white z-40 flex flex-col transition-all duration-300 ease-in-out"
          style={{ opacity: 0, transform: 'translateX(100%)' }}
        >
          {/* Mobile Menu Header with Close Button */}
          <div className="flex justify-between items-center px-4 py-6 border-b border-gray-100">
            <Link
              href="/"
              className="flex items-center"
              onClick={toggleMenu}
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-raleway font-semibold text-xl ml-2 text-black">Arise & Shine</h2>
            </Link>
            <button
              className="p-2 text-black focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-6 items-center justify-start flex-grow py-8 pt-6 overflow-y-auto">
            <Link
              href="/about"
              className="font-raleway font-semibold text-xl text-black py-3 w-full text-center hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              href="/reviews"
              className="font-raleway font-semibold text-xl text-black py-3 w-full text-center hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link
              href="/services"
              className="font-raleway font-semibold text-xl text-black py-3 w-full text-center hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <div className="mt-6">
              <Button
                variant="primary"
                size="md"
                href="/book"
                onClick={toggleMenu}
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 