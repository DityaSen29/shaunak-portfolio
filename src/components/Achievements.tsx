import { Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Achievements = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="achievements" ref={ref} className="section-container bg-accent/5">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Achievements</h2>
        <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className={`bg-white border border-gray-200 md:border-2 rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-700 delay-100 hover:border-foreground ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-background" />
            </div>
            
            <div className="flex-1 space-y-2 md:space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                "Live the Dot" Wall of Fame
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
                Recognized on Deloitte's prestigious "Live the Dot" Wall of Fame for outstanding contributions 
                to client delivery, innovation, and embodying Deloitte's core values. This recognition highlights 
                exceptional project outcomes and leadership in cloud transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
