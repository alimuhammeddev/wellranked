import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "./assets/logo.svg";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services-section" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] z-20">
      <div className="mx-auto max-w-7xl md:px-0 px-5 py-12">
        {/* Top */}

        <div className="flex flex-col items-center gap-5">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={200}/>
          </Link>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center md:gap-8 gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 transition hover:text-[#145EEE]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}

          <div className="flex flex-col items-center gap-2 text-sm">
            <Link
              href="mailto:hello@wellranked.co.uk"
              className="flex items-center gap-2 text-gray-600 transition hover:text-[#145EEE]"
            >
              <Mail size={16} />
              hello@wellranked.co.uk
            </Link>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              Serving businesses across the UK
            </div>

            <div className="mt-1 flex items-center gap-3">
              <Link
                href="#"
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-[#145EEE] hover:text-[#145EEE]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-[#145EEE] hover:text-[#145EEE]"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-[#145EEE] hover:text-[#145EEE]"
                aria-label="X / Twitter"
              >
                <FaXTwitter size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-5 flex flex-col items-center gap-4 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Wellranked. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#145EEE]">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#145EEE]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
