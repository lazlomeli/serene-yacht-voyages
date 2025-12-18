import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#yacht", label: "The Yacht" },
    { href: "#experiences", label: "Experiences" },
    { href: "#crew", label: "Crew" },
    { href: "#facilities", label: "Facilities" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-elegant">
        <nav className="flex items-center justify-between h-20 md:h-24 px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span
              className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Iron Monkey
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Sailing Vessel
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 link-underline ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "gold" : "hero"}
              size="sm"
              asChild
            >
              <a href="#contact">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-sm border-t border-border animate-fade-in">
            <ul className="flex flex-col py-6 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button variant="gold" size="default" className="w-full" asChild>
                  <a href="#contact">Book Now</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
