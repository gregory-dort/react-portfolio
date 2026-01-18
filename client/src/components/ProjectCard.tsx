import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { getTechIcon } from './TechIcons';

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    projectUrl: string;
    repoUrl: string;
    techStack: string[];
    onSelect: () => void;
};

const ProjectCard = ({
    title, description, imageUrl, altText, projectUrl, repoUrl, techStack
}: ProjectCardProps) => {

    const hasLiveDemo = projectUrl && !projectUrl.includes('Not Currently Live');

    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-200 p-6 rounded-md cursor-pointer relative overflow-hidden bg-white group"
            onClick={() => window.open(repoUrl, '_blank')}
        >
            <div className = "mb-4 w-full h-56 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={altText}
                    className = "w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <h3 className={`text-xl font-bold mb-1 text-gray-600`}>
                <u>{title}</u>
            </h3>

            <p className="text-gray-600 mb-4 text-sm line-clamp-4">Project Description: {description}</p>
            
            <div className="flex gap-4 mb-4">
                {/* Live Demo Link - Only show if valid URL exists */}
                {hasLiveDemo && (
                    <a
                        href={projectUrl}
                        target="_blank"
                        aria-label="View Live Demo"
                        title="View Live Demo"
                        className="text-gray-600 hover:text-cyan-300 transition duration-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaExternalLinkAlt size={24} />
                    </a>
                )}
            </div>

            <div className="flex flex-wrap gap-2 text-xs mt-4">
                {techStack.map(tech => (
                    <motion.div 
                    key={tech} 
                    className="flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                        {getTechIcon(tech)} 
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default ProjectCard;