import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "GenAI Chatbot for Insurance",
    company: "Deloitte",
    summary: "Developed an AI-powered chatbot using LangChain, Vertex AI, and Cloud SQL to streamline insurance claim processing.",
    techStack: ["LangChain", "Vertex AI", "Cloud SQL", "Python", "GCP"],
    details: [
      "Built a conversational AI chatbot using LangChain and Vertex AI for natural language understanding",
      "Integrated with Cloud SQL databases for real-time policy and claim data retrieval",
      "Implemented RAG (Retrieval-Augmented Generation) for accurate policy information",
      "Reduced claim inquiry response time by 60% compared to traditional methods",
      "Deployed on Google Cloud Platform with auto-scaling capabilities",
    ],
  },
  {
    title: "Azure Container Apps Migration",
    company: "Deloitte",
    summary: "Architected and executed migration of legacy monolithic application to Azure Container Apps microservices architecture.",
    techStack: ["Azure Container Apps", "Azure SQL", "Docker", "Terraform", "Azure DevOps"],
    details: [
      "Migrated monolithic .NET application to containerized microservices on Azure Container Apps",
      "Reduced API response time from 4 minutes to under 1 minute through architectural optimization",
      "Implemented infrastructure-as-code using Terraform for reproducible deployments",
      "Established CI/CD pipelines using Azure DevOps for automated deployments",
      "Configured auto-scaling based on HTTP traffic and CPU metrics",
      "Integrated Azure SQL Database with connection pooling for optimal performance",
    ],
  },
  {
    title: "Mainframe Re-platforming PoC",
    company: "Deloitte",
    summary: "Led proof-of-concept for re-platforming mainframe applications using modern cloud-native architecture.",
    techStack: ["Salesforce", "z/OS Connect", "MuleSoft", "IBM Mainframe", "APIs"],
    details: [
      "Designed integration architecture connecting Salesforce CRM with IBM mainframe systems",
      "Implemented z/OS Connect to expose mainframe services as RESTful APIs",
      "Built MuleSoft integration layer for seamless data flow between systems",
      "Demonstrated 70% reduction in transaction processing time",
      "Created comprehensive documentation for enterprise-wide adoption",
      "Conducted workshops with stakeholders to demonstrate modernization benefits",
    ],
  },
  {
    title: ".NET Application Modernization",
    company: "Deloitte",
    summary: "Modernized legacy .NET Framework 4.8 application to .NET 8 and containerized deployment on AWS ECS.",
    techStack: [".NET 8", "AWS ECS", "Docker", "AWS RDS", "GitHub Actions"],
    details: [
      "Upgraded legacy .NET Framework 4.8 application to modern .NET 8 runtime",
      "Containerized application using Docker with multi-stage builds for optimization",
      "Deployed to AWS ECS with Fargate for serverless container management",
      "Integrated with AWS RDS for database persistence with connection resilience",
      "Implemented CI/CD using GitHub Actions for automated testing and deployment",
      "Achieved 40% improvement in application performance and reduced hosting costs by 30%",
    ],
  },
  {
    title: "Banking Sector DevOps Transformation",
    company: "Deloitte",
    summary: "Established enterprise DevOps practices for large banking client including Kubernetes orchestration and CI/CD pipelines.",
    techStack: ["AWS EKS", "Jenkins", "Helm", "Terraform", "Python", "Git"],
    details: [
      "Deployed production-grade Kubernetes clusters on AWS EKS for mission-critical banking applications",
      "Designed and implemented Jenkins-based CI/CD pipelines with automated testing and security scanning",
      "Created Helm charts for standardized application deployments across environments",
      "Automated infrastructure provisioning using Terraform modules",
      "Implemented GitOps workflows for configuration management and deployment tracking",
      "Reduced deployment time from days to hours while improving reliability",
      "Trained banking IT teams on Kubernetes and DevOps best practices",
    ],
  },
  {
    title: "Kubernetes Cluster Agent",
    company: "ShunyEka Systems",
    summary: "Built internal monitoring and management agent for Kubernetes clusters with automated remediation capabilities.",
    techStack: ["Kubernetes", "Python", "Prometheus", "Grafana", "Helm"],
    details: [
      "Developed custom Kubernetes operator for cluster health monitoring and automated remediation",
      "Integrated with Prometheus for metrics collection and alerting",
      "Built Grafana dashboards for real-time cluster visualization",
      "Implemented automated pod restart and resource scaling based on health checks",
      "Packaged agent as Helm chart for easy deployment across multiple clusters",
      "Reduced manual intervention for cluster issues by 50%",
    ],
  },
  {
    title: "AWS IAM Compliance Bot",
    company: "ShunyEka Systems",
    summary: "Automated AWS IAM policy compliance checking and remediation to enforce security best practices.",
    techStack: ["AWS Lambda", "Python", "AWS IAM", "CloudWatch", "SNS"],
    details: [
      "Built serverless compliance bot using AWS Lambda for continuous IAM policy monitoring",
      "Automated detection of overly permissive policies and unused credentials",
      "Implemented CloudWatch Events for scheduled compliance checks",
      "Configured SNS notifications for security team alerts",
      "Created automated remediation workflows for common compliance violations",
      "Improved IAM security posture and reduced audit findings by 40%",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      <section id="projects" ref={ref} className="section-container">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight">Projects Showcase</h2>
          <div className="h-1 w-20 bg-foreground mx-auto mb-12"></div>
        </div>

        <p className={`text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          A collection of impactful projects delivering measurable results and innovative solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`group bg-white rounded-3xl p-8 hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${index * 0.08 + 0.2}s` : '0s' }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-foreground leading-tight flex-1">
                  {project.title}
                </h3>
                <svg 
                  className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                {project.company}
              </p>
              
              <p className="text-foreground/70 leading-relaxed text-sm mb-5 flex-grow">
                {project.summary}
              </p>

              <div className="pt-1 border-t border-gray-100">
                <p className="text-xs font-bold text-foreground mb-2 mt-4">Tech Stack:</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {project.techStack.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-3xl font-bold text-foreground leading-tight pr-6">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              {selectedProject?.company}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <p className="text-base text-foreground/80 leading-relaxed">
              {selectedProject?.summary}
            </p>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-lg font-bold mb-4 text-foreground">Key Engagements:</h4>
              <ul className="space-y-3 text-foreground/80">
                {selectedProject?.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 leading-relaxed">
                    <span className="text-foreground font-bold mt-1 flex-shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-lg font-bold mb-3 text-foreground">Tech Stack:</h4>
              <p className="text-base text-foreground/70 leading-relaxed">
                {selectedProject?.techStack.join(" • ")}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
