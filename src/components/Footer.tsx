import { Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white-imakus.png"
              alt="Imakus Cleaning Solutions"
              width={200}
              height={100}
              className="h-32 w-auto"
            />
            <p className="text-white/70 font-body">
              Professional commercial cleaning and detailing services across South Florida to North Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center pt-5">
            <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="mailto:steam@imakus.com" className="text-white/70 hover:text-accent transition-colors">
                  Book a Visit
                </a>
              </li>
              <li>
                <a href="tel:+17864174173" className="text-white/70 hover:text-accent transition-colors">
                  Call for a FREE Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:justify-self-end pt-5">
            <h4 className="text-lg font-display font-bold mb-4">Get Social</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/imakussteamsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-body">LinkedIn</span>
              </a>
              <a
                href="mailto:steam@imakus.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-body">steam@imakus.com</span>
              </a>
              <a
                href="tel:786-571-7725"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-body">786-571-7725</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center space-y-2">
          <p className="text-white/60 font-body text-sm">
            © {new Date().getFullYear()} Imakus Cleaning Solutions. All rights reserved.
          </p>
          <p className="text-white/40 font-body text-xs">
            Design with <span className="text-red-400">&hearts;</span> by{" "}
            <a
              href="https://www.altitudewebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              www.altitudewebworks.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
