import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="My Background" title="" highlightedWord="Education" />

        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:glow-border transition-all duration-300 max-w-2xl">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <span className="font-mono-code text-sm text-muted-foreground">2020 – 2024</span>
              <h3 className="text-xl font-bold mt-1">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-primary font-semibold text-sm mt-1">University of Kashmir</p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Graduate with a strong foundation in computer science, data structures, algorithms,
                and software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
