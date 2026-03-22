import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:chaima.selmi@eniso.u-sousse.tn?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Let's connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-gradient">Contact Me</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card neon-border p-8 md:p-12 space-y-8"
        >
          <div>
            <label className="text-sm text-muted-foreground font-body mb-1 block">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="neon-input w-full text-foreground font-body"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground font-body mb-1 block">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="neon-input w-full text-foreground font-body"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground font-body mb-1 block">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="neon-input w-full text-foreground font-body resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary font-display font-600 text-primary-foreground neon-glow hover:scale-105 transition-transform duration-300 w-full justify-center"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a href="https://github.com/chaima1912" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:neon-glow transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/chaima-selmi-816bb63b0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:neon-glow transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:chaima.selmi@eniso.u-sousse.tn" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:neon-glow transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
