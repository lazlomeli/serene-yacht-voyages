import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container-elegant section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                Iron Monkey
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 block mt-1">
                Sailing Vessel
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Luxury yacht charters in Mallorca and the Balearic Islands. 
              Creating unforgettable maritime experiences since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#yacht", label: "The Yacht" },
                { href: "#experiences", label: "Experiences" },
                { href: "#crew", label: "Crew" },
                { href: "#facilities", label: "Facilities" },
                { href: "#pricing", label: "Pricing" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@svironmonkey.nl"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              Puerto Portals, Mallorca
              <br />
              Balearic Islands, Spain
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs tracking-wider">
            © {currentYear} SV Iron Monkey. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-xs tracking-wider transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-xs tracking-wider transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
