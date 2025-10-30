import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-container py-10 md:py-20"
    >
      <div className="grid md:grid-cols-[58%_42%] gap-10 md:gap-20 items-center w-full">
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight slide-in-left">
              Precision. Passion. Persistence.
            </h1>
            <div className="h-1.5 w-20 md:w-28 bg-foreground slide-in-left stagger-1 rounded-full"></div>
          </div>
          
          <div className="space-y-4 md:space-y-5 slide-in-left stagger-2">
            <h2 className="text-base sm:text-lg md:text-xl text-foreground/85 font-medium leading-relaxed">
              Multi Cloud Practitioner <span className="text-foreground/40">|</span> Infra, DevSecOps and Mainframe Modernization Consultant
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed font-light">
              I help organizations modernize applications, build scalable infrastructure, and leverage cloud technologies to unlock efficiency and innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-6 md:pt-8 slide-in-left stagger-3">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="slide-in-right flex justify-center items-center order-1 md:order-2">
          <div className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-700"></div>
            <img
              src="/shaunak_1.png"
              alt="Shaunak Pandit"
              className="relative w-full mx-auto rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.03] border-[3px] border-gray-900/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
