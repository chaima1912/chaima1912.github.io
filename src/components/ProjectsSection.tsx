import { motion } from "framer-motion";
import { Github, Heart, Thermometer, Smartphone } from "lucide-react";

const projects = [
  {
    title: "SafeSense",
    subtitle: "Smart Worker Safety Monitoring System",
    description: "IoT system designed to monitor worker health and safety. Features heart rate and SpO₂ monitoring using MAX30102 sensor with ESP32 for real-time safety data collection. Goal: improve workplace safety using connected sensing devices.",
    tech: ["ESP32", "MAX30102", "IoT", "Real-time Monitoring"],
    icon: Heart,
    github: "https://github.com/chaima1912/SafeSense.git",
  },
  {
    title: "Smart Greenhouse Controller",
    subtitle: "Automated Environmental Control System",
    description: "Embedded system project built using Arduino Uno for environmental monitoring and automated greenhouse condition control. Microcontroller-based system design with environmental sensors and embedded programming.",
    tech: ["Arduino Uno", "Environmental Sensors", "Embedded C", "Automation"],
    icon: Thermometer,
    github: null,
  },
  {
    title: "Elevia",
    subtitle: "Daily Planner Mobile Application",
    description: "Mobile productivity application developed using Flutter. Helps users organize daily tasks, manage schedules efficiently, and provides a clean and simple daily planner experience.",
    tech: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    icon: Smartphone,
    github: "https://github.com/chaima1912/Elevia.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">What I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-gradient">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card neon-border p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-accent" />
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="font-display text-xl font-600 text-foreground mb-1">{project.title}</h3>
              <p className="text-accent text-xs font-display mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-accent border border-primary/30 font-body">
                    {t}
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

export default ProjectsSection;
