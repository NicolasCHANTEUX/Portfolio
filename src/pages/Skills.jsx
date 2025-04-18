import { motion } from "framer-motion";

// Sample skills data - customize with your own skills
const skillsData = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "💾" },
    { name: "SQL", icon: "🗄️" },
    { name: "PHP", icon: "🐘" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "📜" }
  ],
  frameworks: [
    { name: "Symfony", icon: "🎼" },
    { name: "JavaFX", icon: "🎮" },
    { name: "React (en cours)", icon: "⚛️" },
    { name: "TailwindCSS", icon: "🎨" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Visual Studio Code", icon: "📝" },
    { name: "Android Studio", icon: "📱" },
    { name: "VirtualBox", icon: "📦" },
    { name: "PostgreSQL", icon: "🐘" }
  ],
  methodology: [
    { name: "Gestion de projet", icon: "🗂️" },
    { name: "Cahier des charges", icon: "📄" },
    { name: "Travail en équipe", icon: "🤝" },
    { name: "UX/UI", icon: "🎯" },
    { name: "Respect des délais", icon: "⏱️" }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Compétences</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Voici les langages, frameworks, outils et méthodologies que j'utilise au quotidien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Langages" 
            skills={skillsData.languages} 
            delay={0}
          />
          <SkillCategory 
            title="Frameworks & Bibliothèques" 
            skills={skillsData.frameworks} 
            delay={0.2}
          />
          <SkillCategory 
            title="Outils" 
            skills={skillsData.tools} 
            delay={0.4}
          />
          <SkillCategory 
            title="Méthodologie" 
            skills={skillsData.methodology} 
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, delay }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}