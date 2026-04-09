import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "ServiceNow Developer",
    period: "Feb 2026 – Present",
    company: "EnableNow Technology Solutions",
    current: true,
    bullets: [
      "Developing and customizing ServiceNow applications and modules",
      "Building workflows, business rules, and client scripts for enterprise clients",
      "Integrating ServiceNow with third-party systems using REST/SOAP APIs",
      "Managing scoped applications and update sets for deployment",
    ],
  },
  {
    title: "ServiceNow Developer Intern",
    period: "Sep 2025 – Feb 2026",
    company: "LeLafe IT Solutions Pvt. Ltd.",
    current: false,
    bullets: [
      "Gained hands-on experience with ServiceNow platform administration and development",
      "Created catalog items, workflows, and automated processes using Flow Designer",
      "Worked on ITSM modules including Incident, Problem, and Change Management",
      "Developed Service Portal widgets and UI components",
    ],
  },
  {
    title: "Web Development Intern",
    period: "Jun 2024 – Jul 2024",
    company: "Cognifyz Technologies Ltd",
    current: false,
    bullets: [
      "Built responsive and interactive user interfaces using HTML, CSS, and JavaScript",
      "Tackled web development challenges and completed assignments within deadlines",
    ],
  },
  {
    title: "Web Development Intern",
    period: "Aug 2022 – Oct 2022",
    company: "Verzeo EdTech Pvt. Ltd",
    current: false,
    bullets: [
      "Worked on basic web technologies to create page layouts and portfolios",
      "Learned about effective communication and attention to detail",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="Where I've Worked" title="Work" highlightedWord="Experience" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="font-mono-code text-sm text-muted-foreground">{exp.period}</span>
                </div>
                {exp.current && (
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-mono-code tracking-wider uppercase">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
