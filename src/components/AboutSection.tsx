import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Wifi, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Cpu, label: "Embedded Systems", desc: "ESP32, Arduino, sensors & real-time control" },
    { icon: Wifi, label: "IoT Networks", desc: "MQTT, cloud connectivity & smart devices" },
    { icon: BrainCircuit, label: "AI Integration", desc: "Machine learning for intelligent systems" },
    { icon: Lightbulb, label: "Smart Devices", desc: "Connected sensing & data-driven solutions" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-gradient">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card neon-border p-8 md:p-12 mb-12"
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I'm Chaima Selmi, an Industrial Electronics Engineering student with a deep passion for building at the intersection of hardware and software. My focus lies in IoT ecosystems — designing embedded solutions with ESP32 and Arduino microcontrollers, integrating sensors, and creating smart connected devices. I'm also exploring how AI and machine learning can enhance these systems, making them more intelligent and autonomous. I believe in building practical engineering projects and real-world technology solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card neon-border p-6 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:neon-glow transition-shadow duration-300">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-600 text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
