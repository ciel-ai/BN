import { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 50, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        setIsTyping(true);
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => setIsTyping(false), 1000);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, started]);

    return (
        <span style={{ position: 'relative', display: 'block' }}>
            {/* Invisible placeholder to reserve full text height/width */}
            <span style={{ visibility: 'hidden', display: 'block' }} aria-hidden="true">{text}</span>
            {/* Visible typed text overlaid on top */}
            <span style={{ position: 'absolute', left: 0, top: 0, width: '100%', display: 'block' }}>
                {displayedText}
                {isTyping && (
                    <span className="cursor" style={{ opacity: 1, animation: 'blink 1s infinite' }}>|</span>
                )}
            </span>
            <style>
                {`
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </span>
    );
};

export default TypewriterEffect;


