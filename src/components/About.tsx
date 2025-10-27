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

      <p className={`text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-4xl mx-auto text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        I am a technology professional with expertise in <span className="font-semibold text-foreground">Cloud Computing</span>, <span className="font-semibold text-foreground">DevOps</span>, and <span className="font-semibold text-foreground">Application Modernization</span>. Over the years, I've worked on projects ranging from enterprise-scale application migrations to AI-powered chatbots, and have gained hands-on experience across AWS, Azure, and Google Cloud.
      </p>
    </section>
  );
};

export default About;
