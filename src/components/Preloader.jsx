import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Display for 0.80 seconds (800ms) as requested
        const timer = setTimeout(() => {
            setFadeOut(true);

            // Allow transition to finish before unmounting/completing
            setTimeout(() => {
                if (onFinish) onFinish();
            }, 300); // Wait for CSS transition (0.3s)
        }, 800);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            {/* You can add a logo here if needed */}
            <span className="loader"></span>
        </div>
    );
};

export default Preloader;
