import { motion } from "framer-motion";
import { Cpu, Code2, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Hardware & Embedded Systems",
    icon: Cpu,
    skills: ["Arduino Uno", "ESP32", "Sensors & Electronics", "Embedded Systems"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["C / C++", "Python", "Dart (Flutter)"],
  },
  {
    title: "Technologies",
    icon: Cloud,
    skills: ["IoT", "IoT Protocols (MQTT)", "AI Basics", "Machine Learning Basics", "Deep Learning Basics", "Cloud Services", "Firebase", "Git", "GitHub"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">My toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-gradient">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card neon-border p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-600 text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-chip text-muted-foreground text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
