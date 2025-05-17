import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#EFEADE]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="border-t border-black/20 pt-16">
          <div className="flex flex-col items-start">
            <div className="w-full flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-raleway font-semibold text-2xl text-black">Quick Links</h3>
                <Link
                  href="/"
                  className="font-raleway font-medium text-xl text-textGray transition-colors duration-300 hover:text-primary relative group inline-block w-fit"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/services"
                  className="font-raleway font-medium text-xl text-textGray transition-colors duration-300 hover:text-primary relative group inline-block w-fit"
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/book"
                  className="font-raleway font-medium text-xl text-textGray transition-colors duration-300 hover:text-primary relative group inline-block w-fit"
                >
                  Book Now
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="font-raleway font-medium text-xl text-textGray transition-colors duration-300 hover:text-primary relative group inline-block w-fit"
                >
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/reviews"
                  className="font-raleway font-medium text-xl text-textGray transition-colors duration-300 hover:text-primary relative group inline-block w-fit "
                >
                  Reviews
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
                <h3 className="font-raleway font-semibold text-2xl text-black">Follow us</h3>

                <div className="flex gap-4">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    aria-label="Follow us on Instagram"
                    className="p-2 rounded-full bg-black/5 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Instagram size={24} className="text-black" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    aria-label="Follow us on Facebook"
                    className="p-2 rounded-full bg-black/5 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Facebook size={24} className="text-black" />
                  </Link>
                  <Link
                    href="https://open.kakao.com/o/sHiguHvh"
                    target="_blank"
                    aria-label="Chat with us on KakaoTalk"
                    className="p-2 rounded-full bg-black/5 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <MessageCircle size={24} className="text-black" />
                  </Link>
                </div>

                <div className="font-raleway text-base w-full">
                  <p className="text-black flex items-center md:justify-end gap-2 mb-3">
                    <Phone size={16} className="text-primary shrink-0" />
                    <span className="text-black/70">022 051 6478</span>
                  </p>
                  <p className="text-black flex items-center md:justify-end gap-2 mb-3">
                    <Mail size={16} className="text-primary shrink-0" />
                    <span className="text-black/70 break-all">AriseShineHealth@gmail.com</span>
                  </p>
                  <p className="text-black flex items-center md:justify-end gap-2 mb-3">
                    <MessageCircle size={16} className="text-primary shrink-0" />
                    <span className="text-black/70 break-all">KakaoTalk: open.kakao.com/o/sHiguHvh</span>
                  </p>
                  <p className="text-black flex items-center md:justify-end gap-2">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <span className="text-black/70">Sunnyhills, Auckland</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-black/30 mb-8 md:mb-16"></div>

            <div className="flex items-center gap-5 w-full justify-center md:justify-start">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.svg"
                  alt="Logo part 1"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-raleway font-semibold text-2xl text-black">Arise & Shine</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 