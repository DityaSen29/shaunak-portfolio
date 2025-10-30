import awsLogo from "@/assets/aws-logo.png";
import gcpLogo from "@/assets/gcp-logo.png";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Certifications = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      id="certifications" 
      ref={ref}
      className="section-container bg-gradient-to-b from-background via-accent/5 to-background"
    >
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Certifications</h2>
        <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-12"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white border border-gray-100 md:border-2 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl hover:border-gray-200`}>
          <ul className="space-y-4 md:space-y-6">
            <li className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={awsLogo} alt="AWS" className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-sm md:text-base mb-1">AWS L2 – Mobilize Readiness</span>
                <span className="text-foreground/60 text-xs md:text-sm">Certified Mainframe Modernizer</span>
              </div>
            </li>
            
            <li className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={awsLogo} alt="AWS" className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-sm md:text-base mb-1">AWS Certified Cloud Practitioner</span>
                <span className="text-foreground/60 text-xs md:text-sm">Foundational Cloud Knowledge</span>
              </div>
            </li>
            
            <li className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={gcpLogo} alt="Google Cloud" className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-sm md:text-base mb-1">Google Cloud Skill Badges (×3)</span>
                <span className="text-foreground/60 text-xs md:text-sm block">• Deploying Agentspace</span>
                <span className="text-foreground/60 text-xs md:text-sm block">• Virtual Agent Deployment</span>
                <span className="text-foreground/60 text-xs md:text-sm block">• Orchestrating Solutions using LangChain</span>
              </div>
            </li>
            
            <li className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={gcpLogo} alt="Google Cloud" className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-sm md:text-base mb-1">Google Cloud Fundamentals</span>
                <span className="text-foreground/60 text-xs md:text-sm">Coursera Certification</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
