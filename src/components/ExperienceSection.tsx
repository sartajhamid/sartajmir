import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ServiceNow Developer",
    period: "Feb 2026 – Present",
    company: "EnableNow Technology Solutions",
    description:
      "Developing and customizing ServiceNow applications, workflows, and integrations for enterprise clients.",
  },
  {
    title: "ServiceNow Developer Intern",
    period: "Sep 2025 – Feb 2026",
    company: "LeLafe IT Solutions Pvt. Ltd.",
    description:
      "Worked on ServiceNow platform customization, scripting, and administration tasks during internship.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card p-6 rounded-lg border border-border hover:glow-border transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">{exp.title}</h3>
                  <p className="text-primary/80 font-medium text-sm mt-1">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
