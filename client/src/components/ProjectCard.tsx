import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
    title, description, imageUrl, altText, projectUrl, repoUrl, techStack, onSelect
}: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-200 p-6 rounded-md cursor-pointer relative overflow-hidden bg-white group"
            onClick={onSelect}
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

            <p className="text-gray-600 mb-4 text-sm line-clamp-2">Project Description: {description}</p>
            <a 
                href={projectUrl} 
                target="_blank" 
                className="text-gray-600 hover:text-cyan-300 transition duration-300 mb-4 text-sm"
            >
                Live Demo: {projectUrl}<FaExternalLinkAlt size={15} />
            </a>
            <a
                href={repoUrl}
                target="_blank"
                className="text-gray-600 hover:text-cyan-300 transition duration-300 mb-4 text-sm"
            >
                Link to Github Repository: <FaGithub size={20} />
            </a>

            <div className="flex flex-wrap gap-2 text-xs mt-auto">
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