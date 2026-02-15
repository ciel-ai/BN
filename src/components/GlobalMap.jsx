import { useState } from 'react';
import './GlobalMap.css';

const GlobalMap = () => {
    const [activeCountry, setActiveCountry] = useState(null);

    // Manual coordinates for countries (approximate %)
    // Optimized for a standard 2:1 Aspect Ratio World Map
    const locations = [
        { id: 'us', name: 'United States', x: 21, y: 32 },
        { id: 'ca', name: 'Canada', x: 18, y: 20 },
        { id: 'mx', name: 'Mexico', x: 20, y: 45 },
        { id: 'br', name: 'Brazil', x: 32, y: 65 },
        { id: 'ar', name: 'Argentina', x: 29, y: 80 },
        { id: 'cl', name: 'Chile', x: 26, y: 80 },
        { id: 'uk', name: 'United Kingdom', x: 46.5, y: 23 },
        { id: 'de', name: 'Germany', x: 49, y: 25 },
        { id: 'fr', name: 'France', x: 47, y: 28 },
        { id: 'it', name: 'Italy', x: 50, y: 30 },
        { id: 'es', name: 'Spain', x: 45, y: 32 },
        { id: 'nl', name: 'Netherlands', x: 48, y: 24 },
        { id: 'za', name: 'South Africa', x: 53, y: 78 },
        { id: 'ke', name: 'Kenya', x: 58, y: 56 },
        { id: 'ng', name: 'Nigeria', x: 50, y: 50 },
        { id: 'gh', name: 'Ghana', x: 47, y: 50 },
        { id: 'tz', name: 'Tanzania', x: 57, y: 60 },
        { id: 'ug', name: 'Uganda', x: 56, y: 55 },
        { id: 'ae', name: 'UAE', x: 62, y: 40 },
        { id: 'sa', name: 'Saudi Arabia', x: 60, y: 42 },
        { id: 'in', name: 'India', x: 68, y: 42 },
        { id: 'pk', name: 'Pakistan', x: 65, y: 38 },
        { id: 'lk', name: 'Sri Lanka', x: 69, y: 49 },
        { id: 'bd', name: 'Bangladesh', x: 71, y: 42 },
        { id: 'cn', name: 'China', x: 75, y: 35 },
        { id: 'th', name: 'Thailand', x: 76, y: 45 },
        { id: 'id', name: 'Indonesia', x: 82, y: 58 },
    ];

    return (
        <div className="global-map-container">
            <div className="global-map-wrapper">
                {/* SVG Map Background using a simplified path */}
                <svg className="world-map-svg" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e2e8f0" d="M150,150 Q200,50 350,50 T450,150 T300,300 T150,300 T50,200 T150,150" style={{ display: 'none' }} />
                    {/* 
                     We use a CSS background image for the map silhouette to ensure it looks good.
                     The SVG here is just a placeholder/container. 
                   */}
                    <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" x="0" y="0" width="1000" height="500" opacity="0.2" />
                </svg>

                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className={`map-hotspot ${activeCountry === loc.id ? 'active' : ''}`}
                        style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        onMouseEnter={() => setActiveCountry(loc.id)}
                        onMouseLeave={() => setActiveCountry(null)}
                    >
                        <div className="hotspot-pulse"></div>
                        <div className="hotspot-dot"></div>

                        <div className={`map-tooltip ${activeCountry === loc.id ? 'visible' : ''}`}>
                            {loc.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalMap;
