"use client";

import { motion, useScroll, useSpring } from "motion/react";

export const CircleIndicator = () => {
    const { scrollYProgress } = useScroll();


    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });



    // The scaleX value will be animated based on the scrollYProgress
    // @ts-ignore
    return <motion.div className="progress-bar" style={{ scaleX }} />;
};
