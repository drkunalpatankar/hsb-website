import React, { useEffect, useState } from 'react';

// Scroll Progress Bar Component (lightweight)
export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrollPercent);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

export default { ScrollProgress };
