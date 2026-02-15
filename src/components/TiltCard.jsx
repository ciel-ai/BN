import { useRef, useState, useEffect } from 'react';
import './TiltCard.css';

const TiltCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        if (window.innerWidth <= 768) return; // Disable on mobile to prevent scroll glitches

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Calculate glare position (as percentage)
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        setRotation({ x: rotateX, y: rotateY });
        setGlarePosition({ x: glareX, y: glareY });
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 }); // Reset rotation
    };

    return (
        <div
            className={`tilt-card-wrapper ${className}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                willChange: 'transform',
                transform: isHovering && window.innerWidth > 768
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            }}
        >
            <div
                className="tilt-card-glare"
                style={{
                    background: isHovering
                        ? `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`
                        : 'none',
                    opacity: isHovering ? 1 : 0
                }}
            />
            <div className="tilt-card-content">
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
