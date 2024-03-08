import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomLink = ({ href, title, className, index }) => {
    const router = useRouter();

    // Define your array of colors
    const colors = ["#121212", "#8627c2", "#035dbc", "#e55220"];
    const duration = 0.5; // Duration for each color change in seconds

    const [colorIndex, setColorIndex] = useState(index % colors.length);

    useEffect(() => {
        // Function to update color index and loop through colors array
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, duration * 1000); // Convert duration to milliseconds

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Run only once on component mount

    return (
        <Link href={href}
            className={`${className} relative group w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-md font-bold border-2 border-solid border-light dark:border-light`}
            style={{
                backgroundColor: colors[colorIndex],
                transition: '0.8s background-color', // Add transition duration
            }}
        >
            {title}
        </Link>
    );
};

const FloatingNavigation = () => {
    return (
        <motion.div className='relative bottom-2 left-0 right-0  p-4 flex justify-around items-center'>
            <nav className='hidden xs:flex flex-row space-x-6'>
                <CustomLink href="/" title="Home" index={0} />
                <CustomLink href="/about" title="About" index={1} />
                <CustomLink href="/projects" title="Projects" index={2} />
            </nav>
        </motion.div>
    );
};

export default FloatingNavigation;
