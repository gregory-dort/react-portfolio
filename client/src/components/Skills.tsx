import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = {
            'Frontend': ['React', 'TailwindCSS', 'Next.js', 'HTML', 'CSS', 'Framer Motion', 'Daisy UI'],
            'Backend': ['Express.js', 'Node.js', 'Flask', 'FastAPI', 'Gemini API'],
            'Databases': ['MongoDB', 'PostgreSQL', 'SQL'],
            'Tools & DevOps': ['Git', 'AWS', 'Lucidchart', 'Figma'],
            'Programming Languages': ['Javascript', 'Typescript', 'Python', 'C#']
    };

    return (
        <div className = "mt-20">
             <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Skills & Mastery 💡</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Map Skills Through Here */}
                {Object.entries(skillsData).map(([category, skills]) => (
                    <motion.div 
                        key={category} 
                        className="p-6 border border-gray-200 text-center rounded-lg shadow-lg bg-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl items-center font-semibold mb-4 border-b pb-2">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm font-medium text-gray-900 bg-cyan-100 rounded-full transition-colors hover:bg-cyan-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;