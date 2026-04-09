import { useState } from "react";
import { Send, MapPin, Mail, Linkedin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="Get In Touch" title="Contact" highlightedWord="Me" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3">Let's Connect</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Have a project in mind or want to collaborate? Fill out the form and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                Jammu & Kashmir, India
              </div>
              <a href="mailto:sartaj@example.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary flex-shrink-0" />
                sartajmir@email.com
              </a>
              <a href="https://linkedin.com/in/sartaj-ahmad-mir-6557bb183/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} className="text-primary flex-shrink-0" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono-code tracking-widest uppercase text-muted-foreground mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono-code tracking-widest uppercase text-muted-foreground mb-2">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono-code tracking-widest uppercase text-muted-foreground mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-primary-foreground bg-primary hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
