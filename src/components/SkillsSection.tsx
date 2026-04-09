const skillCategories = [
  {
    title: "ServiceNow",
    skills: [
      "Scripting (Client & Server)", "Flow Designer", "Service Portal", "CMDB",
      "Service Catalog", "ACLs & Security", "CSM", "Glide API",
      "UI Policies & Actions", "Notifications & SLAs", "Update Sets", "ATF Testing",
    ],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "ServiceNow Studio", "Postman"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-all duration-300"
            >
              <h3 className="text-xl font-bold font-heading text-primary mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors duration-200"
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
