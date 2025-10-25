import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="section-container bg-gradient-to-b from-background via-accent/10 to-background">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight">Let's Connect</h2>
        <div className="h-1 w-20 bg-foreground mx-auto mb-12"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-10">
        <p className={`text-xl text-foreground/80 leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          I'm always interested in discussing cloud transformation initiatives, DevOps automation, 
          and innovative technology solutions. Let's connect to explore how we can work together!
        </p>

        <div className={`bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center">
              <Mail className="w-8 h-8 text-background" />
            </div>
            
            <a
              href="mailto:work.shaunak@gmail.com"
              className="text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              work.shaunak@gmail.com
            </a>

            <Button
              onClick={() => window.open("https://www.linkedin.com/in/shaunak-pandit", "_blank")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mt-4"
            >
              View LinkedIn Profile
            </Button>
          </div>
        </div>

        <p className={`text-sm text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Open to consulting opportunities, cloud modernization projects, and challenging technical roles.
        </p>
      </div>
    </section>
  );
};

export default Contact;
