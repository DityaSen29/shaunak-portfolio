import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const coreSkills = [
  { name: "AWS", icon: "/aws.png" },
  { name: "Azure", icon: "/azure.png" },
  { name: "Google Cloud", icon: "/gcp.png" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Kubernetes", icon: "/kubernetes.png" },
  { name: "CI/CD", icon: "/cicd.png" },
  { name: "Terraform", icon: "/terraform.png" },
  { name: "Jenkins", icon: "/jenkins.png" },
  { name: "Helm", icon: "/helm.png" },
  { name: "LangChain", icon: "/langchain.png" },
  { name: "Network Config", icon: "/networkconfig.png" },
  { name: "Version Control", icon: "/git.png" },
];

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-container">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-foreground mx-auto mb-12"></div>
      </div>

      {/* Core Expertise */}
      <div>
        <h3 className={`text-2xl font-bold text-center mb-4 text-foreground transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Core Expertise
        </h3>
        <p className={`text-base text-center text-foreground/70 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Cloud Platforms • DevOps Practices • CI/CD Pipelines • Infrastructure as Code • Monitoring & Automation • Containerization & Orchestration • Application Modernization • Security & Networking
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-foreground hover:shadow-xl cursor-default transition-all duration-500 hover:-translate-y-2 flex flex-col items-center gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${index * 0.03 + 0.2}s` : '0s' }}
            >
              <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-foreground text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
