import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Key Engagements" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "border-b-2 border-gray-200 shadow-lg" : "border-b-2 border-transparent"
        }`}
      >
        <nav className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-bold text-lg md:text-xl text-foreground hover:text-muted-foreground transition-all duration-300 tracking-tight"
          >
            Shaunak Pandit
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-foreground/70 hover:text-foreground transition-all duration-300 relative group font-medium text-sm lg:text-base"
              >
                {section.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop with blur - covers everything except the menu */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Sidebar - on top of backdrop */}
          <div className="md:hidden fixed right-0 top-0 h-full w-[75%] max-w-[300px] bg-white shadow-2xl z-[101]">
            {/* Close button inside sidebar */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <span className="font-bold text-xl text-foreground">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col py-6 px-4 space-y-1">
              {navItems.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left py-4 px-5 text-base font-medium text-foreground hover:bg-gray-100 rounded-xl transition-all border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-400 w-6">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.label}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Footer section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                © 2025 Shaunak Pandit
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
