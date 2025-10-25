import { Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Achievements = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="achievements" ref={ref} className="section-container bg-accent/5">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight">Achievements</h2>
        <div className="h-1 w-20 bg-foreground mx-auto mb-12"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 delay-100 hover:border-foreground ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-background" />
            </div>
            
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                "Live the Dot" Wall of Fame
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
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
