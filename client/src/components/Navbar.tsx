import {motion} from 'framer-motion';

export interface SectionIDs {
    hero: string;
    about: string;
    experience: string;
    contact: string;
    project: string;
}

interface NavbarProps {
    sectionIds: SectionIDs;
}

const Navbar = ({sectionIds}: NavbarProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className = "fixed w-full z-50 bg-white/50 backdrop-blur-sm shadow-md">
            <div className = "container mx-auto flex justify-between items-center py-4 px-4">
                <a
                href = "localhost:5173"
                className = "flex items-center space-x-2"
                >
                    <img 
                        src = "/GDLogo.png" 
                        alt = "Logo"
                        className = "w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    />
                </a>
                <motion.div
                    className="space-x-8 text-gray-600 font-medium font-serif"
                >
                    <motion.button
                        onClick={() => scrollToSection(sectionIds.hero)} 
                        className="hover:text-cyan-100 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        Hero
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection(sectionIds.experience)} 
                        className="hover:text-cyan-100 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        My Experiences
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection(sectionIds.project)} 
                        className="hover:text-cyan-100 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        My Projects
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection(sectionIds.contact)} 
                        className="hover:text-cyan-100 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar;