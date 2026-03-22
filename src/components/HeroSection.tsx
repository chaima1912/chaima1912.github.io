import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">Welcome to my portfolio</p>
          <h1 className="font-display text-6xl md:text-8xl font-800 tracking-tight mb-4 text-gradient">
            Chaima Selmi
          </h1>
          <p className="font-display text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            IoT & Embedded Systems Developer | Engineering Student
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Industrial Electronics Engineering student passionate about IoT and AI. Focused on embedded systems, smart devices, and intelligent data-driven solutions. Interested in building scalable connected systems that bridge hardware and machine learning. Always learning and developing practical, real-world tech solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary font-display font-600 text-primary-foreground neon-glow hover:scale-105 transition-transform duration-300"
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/50 font-display font-600 text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-float">
            <ArrowDown className="w-6 h-6 text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
