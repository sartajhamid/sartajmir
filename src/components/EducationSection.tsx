import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="bg-card border border-border rounded-lg p-8 hover:glow-border transition-all duration-300 flex items-start gap-5 max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-foreground">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-primary font-medium mt-1">University of Kashmir</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
