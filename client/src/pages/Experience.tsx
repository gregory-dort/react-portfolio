import { motion } from 'framer-motion';
import { SectionCard } from '../components';
import { EducationTimeline, WorkTimeline, Skills } from '../components';

const Experience = () => {
    return (
            <section id = "experience" className = "py-24 container mx-auto px-4">
                <motion.h1 
                    className="text-6xl font-serif mb-20 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Professional Experience
                </motion.h1>

                <SectionCard>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 rounded-2xl">
                        <div className="pr-8">
                            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 text-center border-b pb-2">Education 🎓</h2>
                            <EducationTimeline />
                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 text-center border-b pb-2">Work Experience 💼</h2>
                            <WorkTimeline />
                        </div>
                    </div>
                </SectionCard>

                {/* Skills Section */}
                <motion.div className="p-4 mt-20">
                    <motion.h1 
                        className="text-6xl font-serif mb-20 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Skills & Tools 💻
                    </motion.h1>
                    <Skills />
                </motion.div>
            </section>
    );
}

export default Experience;