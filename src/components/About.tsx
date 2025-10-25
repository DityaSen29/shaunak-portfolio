import awsLogo from "@/assets/aws-logo.png";
import gcpLogo from "@/assets/gcp-logo.png";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="section-container bg-gradient-to-b from-background via-accent/5 to-background"
    >
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight">About Me</h2>
        <div className="h-1 w-20 bg-foreground mx-auto mb-12"></div>
      </div>

      <p className={`text-lg md:text-xl text-foreground/80 leading-relaxed mb-16 max-w-4xl mx-auto text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        I am a technology professional with expertise in <span className="font-semibold text-foreground">Cloud Computing</span>, <span className="font-semibold text-foreground">DevOps</span>, and <span className="font-semibold text-foreground">Application Modernization</span>. Over the years, I've worked on projects ranging from enterprise-scale application migrations to AI-powered chatbots, and have gained hands-on experience across AWS, Azure, and Google Cloud.
      </p>

      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Academic Background Section */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-gray-200`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <span className="text-background text-2xl">🎓</span>
            </div>
            <h4 className="text-2xl font-bold text-foreground">Academic Background</h4>
          </div>
          
          <ul className="space-y-6 text-foreground">
            <li className="border-l-4 border-foreground pl-5 py-3 hover:border-gray-400 transition-colors">
              <div className="font-bold text-lg mb-2">B.Tech in Computer Science</div>
              <div className="text-foreground/70 text-sm mb-1">Specializing in Cyber Physical Systems</div>
              <div className="text-foreground/60 text-sm font-medium">
                Vellore Institute of Technology
              </div>
              <div className="text-foreground/50 text-sm mt-1">July 2019 – August 2023</div>
            </li>
            
            <li className="border-l-4 border-foreground pl-5 py-3 hover:border-gray-400 transition-colors">
              <div className="font-bold text-lg mb-2">Higher Secondary Education</div>
              <div className="text-foreground/60 text-sm font-medium">
                Singhania School
              </div>
              <div className="text-foreground/50 text-sm mt-1">2017 – 2019</div>
            </li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-gray-200`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <span className="text-background text-2xl">🏆</span>
            </div>
            <h4 className="text-2xl font-bold text-foreground">Certifications</h4>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-5 p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={awsLogo} alt="AWS" className="w-14 h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-base mb-1">AWS L2 – Mobilize Readiness</span>
                <span className="text-foreground/60 text-sm">Certified Mainframe Modernizer</span>
              </div>
            </li>
            
            <li className="flex items-start gap-5 p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={awsLogo} alt="AWS" className="w-14 h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-base mb-1">AWS Certified Cloud Practitioner</span>
                <span className="text-foreground/60 text-sm">Foundational Cloud Knowledge</span>
              </div>
            </li>
            
            <li className="flex items-start gap-5 p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={gcpLogo} alt="Google Cloud" className="w-14 h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-base mb-1">Google Cloud Skill Badges (×3)</span>
                <span className="text-foreground/60 text-sm block">• Deploying Agentspace</span>
                <span className="text-foreground/60 text-sm block">• Virtual Agent Deployment</span>
                <span className="text-foreground/60 text-sm block">• Orchestrating Solutions using LangChain</span>
              </div>
            </li>
            
            <li className="flex items-start gap-5 p-5 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
              <img src={gcpLogo} alt="Google Cloud" className="w-14 h-14 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-grow">
                <span className="text-foreground font-bold block text-base mb-1">Google Cloud Fundamentals</span>
                <span className="text-foreground/60 text-sm">Coursera Certification</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
