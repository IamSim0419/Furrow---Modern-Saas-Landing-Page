import LogoImage from "@/public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="md:px-24 lg:px-32 ">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-6">
          <div>
            <Link href="/">
              <Image src={LogoImage} alt="Furrow Logo" className="w-32" />
            </Link>
          </div>
          <nav>
            <div className="flex gap-8">
              {FooterLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
