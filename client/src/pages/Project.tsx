import { motion } from 'framer-motion';
import { ProjectCard } from '../components';

const Projects = [
    {
        title: 'PraxAssist - Medical Chatbot',
        description: '',
        imageUrl: '/PraxLogin.png',
        altText: 'PraxAssist Logo',
        projectUrl: '(Not Currently Live)',
        repoUrl: 'https://github.com/gregory-dort/prax-assist',
        techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'TailwindCSS', 'Javascript', 'Gemini']
    },
    {
        title: 'Forkast',
        description: '',
        imageUrl: '/Pasta.jpg',
        altText: 'Prep Time Logo',
        projectUrl: '(Not Currently Live)',
        repoUrl: 'https://github.com/gregory-dort/prep-time',
        techStack: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'TailwindCSS', 'Typescript']
    },
    {
        title: 'Financial Budget Tracker',
        description: '',
        imageUrl: '/Money.jpg',
        altText: 'Financial Planner Logo',
        projectUrl: '(Not Currently Live)',
        repoUrl: 'https://github.com/gregory-dort/fin-app',
        techStack: ['React', 'FastAPI', 'NodeJS', 'PostgreSQL', 'TailwindCSS', 'Javascript', 'Python']
    },
    {
        title: 'Confluence Streaming',
        description: '',
        imageUrl: '/CSLogo.png',
        altText: 'Confluence Streaming Logo',
        projectUrl: 'https://confluence-streaming-108b2e0ec103.herokuapp.com/',
        repoUrl: 'https://github.com/jpgeib/confluence-streaming',
        techStack: ['React', 'Javascript']
    }
]

const Project = () => {
    const handleProjectSelect = (title: string) => {
        console.log(`Selected project: ${title}`);
    };

    return (
        <div id="project" className="min-h-[100vh]">
            <motion.h1
                className="text-6xl font-serif mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                The Project Collection
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            altText={project.altText}
                            projectUrl={project.projectUrl}
                            repoUrl={project.repoUrl}
                            techStack={project.techStack}
                            onSelect={() => handleProjectSelect(project.title)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;