import { Navbar, Footer } from '../components';
import type { SectionIDs } from '../components/Navbar';
import { About, Contact, Experience, Project } from './index';
import Hero from './Hero';

const sectionID: SectionIDs = {
    hero: 'hero',
    about: 'about',
    experience: 'experience',
    contact: 'contact',
    project: 'project'
};

const Home = () => {
    return (
        <div className = "bg-gradient-to-br from-cyan-100 to-slate-600 w-full min-h-screen text-gray-800">
            <Navbar sectionIds = {sectionID} />

            <main className = "container mx-auto px-4">
                <section id = {sectionID.hero} className = "py-24">
                    <Hero />
                </section>
                <section id = {sectionID.about} className = "py-24">
                    <About />
                </section>
                <section id = {sectionID.experience} className = "py-24">
                    <Experience />
                </section>
                <section id = {sectionID.project} className = "py-24">
                    <Project />
                </section>
                <section id = {sectionID.contact} className = "py-24">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;