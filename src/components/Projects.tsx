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
    summary: "Built a GenAI-powered chatbot using LangChain and Vertex AI on GCP Cloud Run & Dialogflow with generative fallback, personalization, and sentiment analysis capabilities.",
    techStack: ["LangChain", "Vertex AI", "GCP Cloud Run", "Dialogflow", "Python", "Sentiment Analysis"],
    details: [
      "Built a conversational AI chatbot using LangChain and Vertex AI for natural language understanding",
      "Deployed on GCP Cloud Run with Dialogflow integration for enhanced conversational capabilities",
      "Implemented generative fallback to handle unexpected queries gracefully",
      "Configured personalization based on user data to recommend optimal insurance policies",
      "Enabled sentiment analysis to gauge customer satisfaction and adjust responses accordingly",
      "Chatbot trained on user interactions to continuously self-improve over time",
    ],
  },
  {
    title: "Application Migration (Azure)",
    company: "Deloitte",
    summary: "Single-handedly migrated a GenAI tax application from Azure Web Apps to Azure Container Apps in 3.5 days, reducing latency from 4 mins → 1 min for 60+ concurrent users; recognized on Deloitte Wall of Fame.",
    techStack: ["Azure Container Apps", "Azure Web Apps", "Docker", "Azure DevOps", "GenAI"],
    details: [
      "Migrated entire GenAI application for the tax technology vertical from Azure Web Apps to Azure Container Apps in just 3.5 days",
      "Reduced application response time from 4 minutes per user to 1 minute for 60+ concurrent users",
      "Optimized cost structure while increasing application availability and scalability",
      "Application became a company-wide success, added to managed bookmarks for all Deloitte employees",
      "Received significant appreciation and a 'Live the Dot' badge on Deloitte's Wall of Fame",
      "Demonstrated ability to execute high-impact migrations under tight timelines",
    ],
  },
  {
    title: "Mainframe Re-platforming PoC (AWS)",
    company: "Deloitte",
    summary: "Created a PoC integrating Salesforce with zOS Connect via a containerized Java application on AWS EC2, enabling real-time CRM data exchange for a Japanese automobile client.",
    techStack: ["AWS EC2", "zOS Connect", "Salesforce", "MuleSoft", "Java", "Containerization"],
    details: [
      "Created proof-of-concept for a Japanese automobile giant seeking to re-platform mainframe applications to AWS",
      "Configured end-to-end connectivity architecture for mainframe-to-cloud integration",
      "Deployed containerized Java application on Linux EC2 to translate API requests from Salesforce",
      "Integrated with zOS Connect server hosted on AWS EC2 to fetch mainframe data",
      "Enabled seamless data exchange between Salesforce CRM and MuleSoft via the integration layer",
      "Demonstrated feasibility and benefits of modernizing legacy mainframe systems",
    ],
  },
  {
    title: ".NET Modernization (AWS ECS)",
    company: "Deloitte",
    summary: "Re-platformed a .NET 4.8 application to .NET 8, hosting on AWS ECS with MSSQL on EC2, integrated with Prometheus monitoring and CodeCommit/ECR for streamlined DevOps.",
    techStack: [".NET 8", "AWS ECS", "AWS EC2", "MSSQL", "Prometheus", "AWS CodeCommit", "AWS ECR"],
    details: [
      "Created proof-of-concept to demonstrate application modernization from .NET 4.8 to .NET 8 using AWS Q Developer",
      "Hosted entire application on AWS ECS with complete VPC configuration",
      "Deployed MSSQL database on EC2 server with proper security and networking setup",
      "Integrated Prometheus for metrics visualization and application monitoring",
      "Used AWS CodeCommit as the code repository and AWS ECR as the container registry",
      "Showcased end-to-end modernization workflow with cloud-native DevOps practices",
    ],
  },
  {
    title: "Banking DevOps Ownership",
    company: "Deloitte",
    summary: "Solely handled entire DevOps and infrastructure for a major Indian bank's outward remittance application on AWS EKS with Jenkins CI/CD, Helm, and Nginx reverse proxy across 9 environments.",
    techStack: ["AWS EKS", "Jenkins", "Helm", "Nginx", "Kubernetes", "Terraform", "GitOps"],
    details: [
      "Solely managed DevOps and infrastructure for a major Indian bank's outward remittance application over 1.1 years",
      "Deployed and maintained infrastructure with Nginx as reverse proxy and application on AWS EKS",
      "Configured and operated Jenkins as the CI/CD tool for automated deployments",
      "Handled entire Kubernetes cluster using Helm charts for deployment standardization",
      "Performed troubleshooting, service configuration, and deployment management across 8 non-prod and 1 prod environment",
      "Ensured high availability and scalability for mission-critical banking operations",
      "Resolved major issues identified in VA and AppSec testing, ensuring compliance with required standards",
    ],
  },
  {
    title: "Mainframe Modernization Core Team",
    company: "Deloitte",
    summary: "Currently contributing as Infrastructure & DevOps expert for Deloitte's strategic mainframe modernization initiatives.",
    techStack: ["AWS", "Azure", "Kubernetes", "CI/CD", "Infrastructure as Code", "Modernization Frameworks"],
    details: [
      "Part of Deloitte's core team focused on mainframe modernization strategies and execution",
      "Contributing expertise in infrastructure architecture and DevOps best practices",
      "Collaborating on strategic initiatives to help clients transition from legacy mainframe systems",
      "Providing technical guidance on cloud migration patterns and modernization approaches",
      "Supporting proof-of-concepts and production implementations for modernization projects",
    ],
  },
  {
    title: "SSO Login with AWS Cognito + Azure AD",
    company: "ShunyEka Systems",
    summary: "Developed SSO login for an application using AWS Cognito and Azure AD, configured end-to-end and fully automated deployment using Terraform.",
    techStack: ["AWS Cognito", "Azure AD", "Terraform", "IAC", "SSO"],
    details: [
      "Created Single Sign-On (SSO) login solution for an application using AWS Cognito and Azure AD",
      "Configured entire authentication flow from start to finish",
      "Automated deployment and infrastructure provisioning using Terraform",
      "Enabled seamless user authentication across cloud platforms",
      "Reduced login friction and improved security posture for the application",
    ],
  },
  {
    title: "Cloud-Agnostic Kubernetes Agent",
    company: "ShunyEka Systems",
    summary: "Built an agent-based integration for Kubernetes clusters to stream data to the company's flagship application, enabling monitoring and insights across any cloud platform.",
    techStack: ["Kubernetes", "Python", "Cloud-Agnostic Design", "Monitoring", "Data Streaming"],
    details: [
      "Developed agent-based integration deployable in any Kubernetes cluster",
      "Designed to be cloud-independent, working across AWS, Azure, GCP, and on-premises clusters",
      "Streamed cluster data to company's flagship application for centralized monitoring",
      "Enabled actionable insights on cluster performance, health, and resource utilization",
      "Simplified multi-cloud Kubernetes management for the company's clients",
    ],
  },
  {
    title: "AWS IAM Compliance Bot",
    company: "ShunyEka Systems",
    summary: "Created a compliance bot for a quick commerce client to analyze IAM usage, enforce least-privilege via permission boundaries, and include email-based approval workflow.",
    techStack: ["AWS IAM", "AWS Lambda", "Python", "Permissions Boundaries", "Email Automation"],
    details: [
      "Built compliance bot for a well-known quick commerce platform",
      "Analyzed IAM user access across AWS accounts to identify actual service usage",
      "Created permission boundaries restricting access to only services used in the last 'x' days (configurable parameter)",
      "Implemented listener component to detect IAM activity",
      "Built evaluator to assess access patterns and compliance requirements",
      "Automated permission boundary creation and enforcement",
      "Included email-based approval mechanism for administrative oversight",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight">Key Engagements</h2>
          <div className="h-1 w-16 md:w-20 bg-foreground mx-auto mb-8 md:mb-12"></div>
        </div>

        <p className={`text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto px-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          A collection of impactful projects delivering measurable results and innovative solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`group bg-white rounded-3xl p-6 md:p-8 hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 flex flex-col relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${index * 0.08 + 0.2}s` : '0s' }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight flex-1">
                    {project.title}
                  </h3>
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 md:mb-4">
                  {project.company}
                </p>
                
                <p className="text-foreground/70 leading-relaxed text-sm mb-4 md:mb-5 flex-grow">
                  {project.summary}
                </p>

                <div className="pt-1 border-t border-gray-100">
                  <p className="text-xs font-bold text-foreground mb-2 mt-3 md:mt-4">Tech Stack:</p>
                  <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    {project.techStack.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-3xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto bg-white rounded-2xl md:rounded-3xl p-6 md:p-8">
          <DialogHeader className="space-y-2 md:space-y-3">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight pr-8 md:pr-6">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">
              {selectedProject?.company}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 md:space-y-6 pt-3 md:pt-4">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              {selectedProject?.summary}
            </p>

            <div className="border-t border-gray-100 pt-4 md:pt-6">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-foreground">Project Details:</h4>
              <ul className="space-y-2 md:space-y-3 text-foreground/80">
                {selectedProject?.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3 leading-relaxed text-sm md:text-base">
                    <span className="text-foreground font-bold mt-0.5 md:mt-1 flex-shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-4 md:pt-6">
              <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-foreground">Tech Stack:</h4>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
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
