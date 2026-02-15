import { useState, useRef } from 'react';
import './Magnifier.css';

const Magnifier = ({ src, alt, zoomLevel = 2.5 }) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const imgRef = useRef(null);

    const handleMouseEnter = (e) => {
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const handleMouseMove = (e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    };

    const handleMouseLeave = () => {
        setShowMagnifier(false);
    };

    return (
        <div
            className="magnifier-container"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={src}
                alt={alt}
                className="magnifier-image"
                ref={imgRef}
            />

            {showMagnifier && (
                <div
                    className="magnifier-glass"
                    style={{
                        display: showMagnifier ? '' : 'none',
                        position: 'absolute',
                        pointerEvents: 'none',
                        height: '150px',
                        width: '150px',
                        top: `${y - 75}px`,
                        left: `${x - 75}px`,
                        opacity: '1',
                        border: '2px solid var(--color-primary)',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                        backgroundPositionX: `${-x * zoomLevel + 75}px`,
                        backgroundPositionY: `${-y * zoomLevel + 75}px`,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                        zIndex: 100
                    }}
                />
            )}

            {/* Overlay hint for user */}
            {!showMagnifier && (
                <div className="magnifier-hint">
                    <span className="fi fi-search"></span> Hover or tap to inspect precision
                </div>
            )}
        </div>
    );
};

export default Magnifier;
