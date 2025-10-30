import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="section-container bg-gradient-to-b from-background via-accent/10 to-background">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Let's Connect</h2>
        <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-12"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-10 px-4">
        <p className={`text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          I'm always interested in discussing cloud transformation initiatives, DevOps automation, 
          and innovative technology solutions. Let's connect to explore how we can work together!
        </p>

        <div className={`bg-white border border-gray-200 md:border-2 rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-foreground flex items-center justify-center">
              <Mail className="w-7 h-7 md:w-8 md:h-8 text-background" />
            </div>
            
            <a
              href="mailto:work.shaunak@gmail.com"
              className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors break-all"
            >
              work.shaunak@gmail.com
            </a>

            <Button
              onClick={() => window.open("https://www.linkedin.com/in/shaunak-pandit", "_blank")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mt-2 md:mt-4 w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
            >
              View LinkedIn Profile
            </Button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Open to consulting opportunities, cloud modernization projects, and challenging technical roles.
        </p>
      </div>
    </section>
  );
};

export default Contact;
