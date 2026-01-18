import { motion } from 'framer-motion';
import React from 'react';

interface SectionCardProps {
    children: React.ReactNode;
    className?: string;
};

const SectionCard = ({ children, className }: SectionCardProps) => {
    return (
       <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`
                bg-white border border-gray-200 shadow-xl 
                p-12 md:p-16 rounded-xl mx-auto max-w-7xl
                ${className || ''}
            `}
        >
            {children}
        </motion.div>
    );
}

export default SectionCard;