import { Zap, Globe, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "ServiceNow",
    icon: Zap,
    skills: [
      "ServiceNow Platform", "Scripting (Client & Server)", "Flow Designer", "IntegrationHub",
      "Service Portal", "Glide API", "CMDB", "CSM",
      "ATF (Automated Testing)", "Update Sets & Scoped Apps", "REST / SOAP APIs",
      "UI Policies & Actions", "Business Rules", "Notifications & SLAs", "ACLs & Security",
      "Service Catalog",
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML / CSS", "JavaScript", "React.js", "Responsive Design", "Tailwind CSS"],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    skills: ["Git & Version Control", "REST APIs", "OOP Concepts", "Agile / Scrum", "Problem Solving"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="What I Know" title="Professional" highlightedWord="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-6 hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary border border-border text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
