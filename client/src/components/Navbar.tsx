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
                <img 
                src = "/GDLogo.png" 
                alt = "Logo"
                className = "w-14 h-14 rounded-full shadow-sm"
                />
                <div className = "space-x-8">
                    <button onClick={() => scrollToSection(sectionIds.hero)} className="hover:text-cyan-300 transition duration-300">
                        Hero
                    </button>
                    <button onClick={() => scrollToSection(sectionIds.about)} className="hover:text-cyan-300 transition duration-300">
                        About Me
                    </button>
                    <button onClick={() => scrollToSection(sectionIds.experience)} className="hover:text-cyan-300 transition duration-300">
                        My Experiences
                    </button>
                    <button onClick={() => scrollToSection(sectionIds.project)} className="hover:text-cyan-300 transition duration-300">
                        My Projects
                    </button>
                    <button onClick={() => scrollToSection(sectionIds.contact)} className="hover:text-cyan-300 transition duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;