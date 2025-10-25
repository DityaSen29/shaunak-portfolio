import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 py-12 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-foreground font-semibold text-lg mb-1">Shaunak Pandit</p>
            <p className="text-muted-foreground text-sm">
              © 2025 All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/shaunak-pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:work.shaunak@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
