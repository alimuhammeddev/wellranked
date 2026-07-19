import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services-section" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl md:px-0 px-5 py-12">
        {/* Top */}

        <div className="flex flex-col items-center gap-5">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              W
            </div>

            <div>
              <h2 className="font-bold text-[#102A56]">Wellranked</h2>

              <p className="text-sm text-gray-500">
                Visibility • Growth • Authority
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center md:gap-8 gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}

          <div className="flex flex-col items-center gap-2 text-sm">
            <Link
              href="mailto:hello@wellranked.co.uk"
              className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
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
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-blue-600 hover:text-blue-600"
              >
                <FaLinkedin size={16} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-blue-600 hover:text-blue-600"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:border-blue-600 hover:text-blue-600"
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
            <Link href="#" className="hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-blue-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
