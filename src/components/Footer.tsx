import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 md:border-t-2 py-8 md:py-12 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-foreground font-semibold text-base md:text-lg mb-1">Shaunak Pandit</p>
            <p className="text-muted-foreground text-xs md:text-sm">
              © 2025 All rights reserved.
            </p>
          </div>

          <div className="flex gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com/in/shaunak-pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 md:border-2 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="mailto:work.shaunak@gmail.com"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 md:border-2 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
