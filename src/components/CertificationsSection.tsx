import { Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certifications = [
  {
    title: "Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    description:
      "Validated expertise in ServiceNow platform administration, configuration, and management of enterprise applications.",
  },
  {
    title: "Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    description:
      "Demonstrated proficiency in building, testing, and deploying applications on the ServiceNow platform.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="My Credentials" title="" highlightedWord="Certifications" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-xl p-6 hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
