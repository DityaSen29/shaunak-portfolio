import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b-2 border-gray-200 shadow-lg" : "border-b-2 border-transparent"
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-bold text-xl text-foreground hover:text-muted-foreground transition-all duration-300 tracking-tight"
        >
          Shaunak Pandit
        </button>

        <div className="flex items-center gap-10">
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Key Engagements" },
            { id: "certifications", label: "Certifications" },
            { id: "contact", label: "Contact" }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-foreground/70 hover:text-foreground transition-all duration-300 relative group font-medium"
            >
              {section.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
