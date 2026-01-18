import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, 
            delayChildren: 0.5, 
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};


const Hero = () => {
    return (
        <section id = 'hero' className = "h-screen flex flex-col items-center justify-center bg-transparent">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl px-4"
            >
                <motion.img
                    variants={itemVariants}
                    src="/GregWC.jpg"
                    alt="Profile Picture"
                    className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mx-auto mb-4 border-2 border-gray-200 shadow-xl"
                />
                <motion.h1
                    variants={itemVariants} 
                    className="text-4xl md:text-7xl text-center font-serif font-light tracking-wider mb-4 text-gray-800"
                >
                    Gregory Dort
                </motion.h1>
                <motion.h2
                    variants={itemVariants} 
                    className="text-3xl md:text-4xl text-center font-serif text-gray-800 mb-4"
                >
                    Software Engineer
                </motion.h2>
                <motion.p 
                    variants={itemVariants} 
                    className="mb-4 text-gray-800 text-center italic font-serif text-3xl text-bold"
                >
                   Connect with me here!
                </motion.p>
                <motion.div className="flex flex-col items-center mb-8">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row space-x-4 justify-center mb-4"
                    >
                        <motion.a
                            href="https://github.com/gregory-dort"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub Profile"
                            title="View GitHub Profile"
                            className="text-gray-800 hover:text-cyan-300 hover:scale-115 transition duration-500"
                        >
                            <FaGithub size={30} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/gregory-dort-776503218/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View LinkedIn Profile"
                            title="View LinkedIn Profile"
                            className="text-gray-800 hover:text-cyan-300 hover:scale-115 transition duration-500"
                        >
                            <FaLinkedin size={30} />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/gdort07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Instagram Profile"
                            title="View Instagram Profile"
                            className="text-gray-800 hover:text-cyan-300 hover:scale-115 transition duration-500"
                        >
                            <FaInstagram size={30} />
                        </motion.a>
                        <motion.a
                            href="mailto:gregory.dort@gmail.com?subject=Portfolio Inquiry"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email Me"
                            title="Email Me"
                            className="text-gray-800 hover:text-cyan-300 hover:scale-115 transition duration-500"
                        >
                            <FaEnvelope size={30} />
                        </motion.a>
                    </motion.div>
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-cyan-100 border-1 border-gray-200 rounded-md shadow-md text-gray-800 font-serif hover:bg-cyan-300 transition duration-500"
                        onClick={() => window.open('/Gregory Dort SWE Resume.pdf', '_blank')}
                    >
                            View My Resume
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;