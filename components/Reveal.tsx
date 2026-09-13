"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

/**
 * Standard scroll-triggered entrance used across every section, so motion
 * reads as one consistent, orchestrated design language instead of a
 * different effect per component.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
