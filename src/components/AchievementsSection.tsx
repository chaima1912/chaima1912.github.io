import { motion } from "framer-motion";
import { Trophy, Wrench, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "MIDNIGHT AI Hackathon",
    org: "Orange Digital Center Club ENISo",
    description: "Team Bright won 🏆 1st Prize at the MIDNIGHT AI Hackathon, demonstrating strong collaboration, innovative thinking, and effective application of AI concepts.",
    highlights: ["1st Prize Winner", "AI Application", "Team Collaboration"],
  },
  {
    icon: Wrench,
    title: "Embedded Systems Training",
    org: "Orange Digital Center Club ENISo",
    description: "Completed an Embedded Systems training program including 4 sessions and practical workshops. Developed a hand-controlled robot with the team, strengthening embedded systems development, hardware–software integration, and prototyping skills.",
    highlights: ["4 Sessions", "Hand-controlled Robot", "Hardware Integration"],
  },
  {
    icon: Award,
    title: "DataCamp Certifications",
    org: "DataCamp",
    description: "Completed courses covering Machine Learning fundamentals (supervised & unsupervised), Deep Learning basics, Data Science, Artificial Intelligence, and Cloud Computing. Developed skills in neural networks, model training, data analysis, and intelligent system concepts.",
    highlights: ["Machine Learning", "Deep Learning", "Data Science", "Cloud Computing"],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Milestones</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-gradient">Achievements & Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card neon-border p-6 md:p-8 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-600 text-foreground mb-1">{item.title}</h3>
                  <p className="text-accent text-xs font-display mb-3">{item.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-accent border border-primary/30 font-body">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
