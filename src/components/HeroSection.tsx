import { Linkedin, Instagram, Github, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/sartaj-ahmad-mir-6557bb183/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sartaj.hamid", label: "Instagram" },
  { icon: Github, href: "https://github.com/sartajhamid", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/SartajAhmadMir7", label: "X / Twitter" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up">
          <p className="text-primary font-medium text-lg">Hello there 👋</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
            I'm{" "}
            <span className="text-gradient">Sartaj Ahmad Mir</span>
          </h1>
          <p className="text-xl sm:text-2xl font-heading text-primary font-semibold">
            Software Engineer
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
            I am a certified ServiceNow System Administrator (CSA) and Certified Application
            Developer (CAD). Passionate about building scalable enterprise solutions and delivering
            exceptional user experiences.
          </p>

          <div className="flex items-center gap-4 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(32,95%,55%,0.3)]"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-border" style={{ animation: "pulse-ring 2s infinite" }}>
              <img
                src="/images/profile.jpg"
                alt="Sartaj Ahmad Mir"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
