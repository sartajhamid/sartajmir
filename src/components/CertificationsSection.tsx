import { Award } from "lucide-react";

const certifications = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
  },
  {
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
          <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold font-heading text-foreground">{cert.title}</h3>
                <p className="text-primary text-sm mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
