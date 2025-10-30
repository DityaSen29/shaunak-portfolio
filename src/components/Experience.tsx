import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    company: "Deloitte India",
    roles: [
      { title: "Assistant Manager – Cloud", period: "June 2025 – Present" },
      { title: "Cloud Analyst", period: "Dec 2023 – June 2025" },
    ],
    description:
      "At Deloitte, I have contributed to GenAI solutions, cloud migrations, application modernization, and large-scale DevOps ownership. My work has impacted sectors like banking, insurance, automotive, and tax technology, delivering measurable outcomes in efficiency, cost optimization, and innovation.",
  },
  {
    company: "ShunyEka Systems Pvt. Ltd.",
    roles: [{ title: "DevOps Engineer", period: "July 2022 – July 2023" }],
    description:
      "At ShunyEka Systems, I worked on cloud-native solutions, infrastructure automation, and Kubernetes-based integrations. Key contributions included building SSO solutions with AWS Cognito + Azure AD, developing a cloud-independent Kubernetes monitoring agent, and designing compliance automation for AWS IAM.",
  },
];

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="section-container bg-gradient-to-b from-background via-accent/10 to-background">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Professional Experience</h2>
        <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-16"></div>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Modern timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-foreground via-gray-300 to-foreground hidden md:block opacity-30" />

        <div className="space-y-10 md:space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative pl-0 md:pl-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${index * 0.15 + 0.2}s` : '0s' }}
            >
              {/* Modern timeline dot */}
              <div className="absolute left-[18px] top-6 w-8 h-8 rounded-full border-4 border-foreground bg-background hidden md:flex items-center justify-center shadow-lg z-10">
                <div className="w-3 h-3 rounded-full bg-foreground"></div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground">{exp.company}</h4>
                  <div className="space-y-1.5 md:space-y-2">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-muted-foreground">
                        <span className="font-semibold text-foreground text-base sm:text-lg">{role.title}</span>
                        <span className="text-xs sm:text-sm hidden sm:inline">•</span>
                        <span className="text-xs sm:text-sm">{role.period}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3 md:my-4"></div>
                  <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
