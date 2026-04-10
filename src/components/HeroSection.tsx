import { Linkedin, Instagram, Github, Twitter, Eye, Download } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/sartaj.hamid", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/sartaj-ahmad-mir-6557bb183/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SartajAhmadMir7", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/sartajhamid", label: "GitHub" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Profile */}
        <div className="flex flex-col items-center text-center order-1" style={{ animation: "fade-in-up 0.6s ease-out forwards" }}>
          <div className="relative mb-6">
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary"
              style={{ animation: "pulse-ring 2s infinite" }}
            >
              <img src="/images/profile.jpg" alt="Sartaj Ahmad Mir" className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Sartaj Ahmad Mir</h2>
          <p className="font-mono-code text-primary font-semibold mt-1">Software Engineer</p>
          <p className="text-muted-foreground text-sm mt-1">Jammu & Kashmir, India</p>

          <div className="flex items-center gap-4 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Text */}
        <div className="order-2 space-y-5" style={{ animation: "fade-in-up 0.6s ease-out 0.2s forwards", opacity: 0 }}>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">Hello there 👋</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
            I am{" "}
            <span className="text-gradient">Sartaj{"\n"}Ahmad Mir</span>
            ,{" "}a{" "}
            <span className="text-gradient">Software Engineer!</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
            Certified ServiceNow Developer (CSA, CAD)<br />
            Specializing in custom applications, automation, and seamless platform solutions.<br />
            Focused on optimizing processes and enhancing user experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Eye size={18} />
              View CV
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
