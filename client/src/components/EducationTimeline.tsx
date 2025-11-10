import { motion } from 'framer-motion';
import EducationTLItem from './EducationTLItem';

const eduData = [
    {
        index: 1,
        school: "Fairfield University (Fairfield, CT)",
        major: "Master of Science: Software Engineering",
        minor: null,
        date: "May 2025 - May 2027",
        involvement: null
    },
    {
        index: 2,
        school: "Sacred Heart University (Fairfield, CT)",
        major: "Bachelor of Science: Information Technology",
        minor: "Minor: Computer Science",
        date: "August 2021 - May 2025",
        involvement: "Involvement: Trustee's Scholarship Recipient, Information Technology Work Study, Residential Life, La Hispanidad, Black Student Union, Welch Mentor Program, MACC Pioneers Mentor, Welch Corporate Structure Technology Team, SHU Innovate, Theatre Arts Program"
    },
    {
        index: 3,
        school: "Seton Hall Preparatory School (West Orange, NJ)",
        major: null,
        minor: null,
        date: "August 2017 - May 2021",
        involvement: "Varsity Football & Wrestling, Theatre Arts Program, Art Club, Spanish Club, Black Student Society, SHP Service Club, Environmental Club"
    }
];

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const EducationTimeline = () => {
    return (
       <motion.ul 
            variants={listVariants}
            initial="hidden"
            animate="visible"
        >
            {eduData.map((item, index) => (
                <EducationTLItem key={index}
                {...item} />
            ))}
        </motion.ul>
    );
}

export default EducationTimeline;