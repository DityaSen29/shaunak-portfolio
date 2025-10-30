import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const AcademicBackground = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      id="academic" 
      ref={ref}
      className="section-container"
    >
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Academic Background</h2>
        <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-12"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white border border-gray-100 md:border-2 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl hover:border-gray-200`}>
          <ul className="space-y-4 md:space-y-6 text-foreground">
            <li className="border-l-4 border-foreground pl-4 md:pl-5 py-3 hover:border-gray-400 transition-colors">
              <div className="font-bold text-base md:text-lg mb-2">B.Tech in Computer Science</div>
              <div className="text-foreground/70 text-xs md:text-sm mb-1">Specializing in Cyber Physical Systems</div>
              <div className="text-foreground/60 text-xs md:text-sm font-medium">
                Vellore Institute of Technology
              </div>
              <div className="text-foreground/50 text-xs md:text-sm mt-1">July 2019 – August 2023</div>
            </li>
            
            <li className="border-l-4 border-foreground pl-4 md:pl-5 py-3 hover:border-gray-400 transition-colors">
              <div className="font-bold text-base md:text-lg mb-2">Higher Secondary Education</div>
              <div className="text-foreground/60 text-xs md:text-sm font-medium">
                Singhania School
              </div>
              <div className="text-foreground/50 text-xs md:text-sm mt-1">2017 – 2019</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
