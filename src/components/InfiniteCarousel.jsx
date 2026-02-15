import React from 'react';
import './InfiniteCarousel.css';

const InfiniteCarousel = () => {
    const keywords = [
        "Engineered Precision",
        "Trusted by Professionals",
        "40+ Years of Excellence",
        "Complete Tailoring Solutions",
        "Industrial Strength",
        "Retail Precision",
        "Crafted for Performance",
        "Global Quality Standards"
    ];

    // Duplicate the keywords to create a seamless loop
    const items = [...keywords, ...keywords, ...keywords, ...keywords];

    return (
        <div className="infinite-carousel">
            <div className="carousel-track">
                {items.map((text, index) => (
                    <div key={index} className="carousel-item">
                        {text}
                        <span className="separator">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
