import { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';

const mediaItems = [
    { type: 'video', src: '/assets/videos/carousel1.mp4' },
    { type: 'video', src: '/assets/videos/carousel2.mp4' },
    { type: 'video', src: '/assets/videos/carousel3.mp4' },
    { type: 'video', src: '/assets/videos/aromi%20pin%20video.mov' },
    { type: 'video', src: '/assets/videos/panda%20pin%20video.mov' }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    };

    const [offsetY, setOffsetY] = useState(0);

    const handleVideoEnd = () => {
        // Delay moving to the next slide to ensure the video feels "finished"
        setTimeout(() => {
            handleNext();
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentItem = mediaItems[currentIndex];

        if (currentItem.type === 'image') {
            const timer = setTimeout(() => {
                handleNext();
            }, currentItem.duration);

            return () => clearTimeout(timer);
        }

        // For video, we rely on the onEnded event, but we also ensure it plays
        if (currentItem.type === 'video' && videoRef.current) {
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();

            playPromise.catch(error => {
                console.error("Auto-play was prevented:", error);
                // Don't force skip on error, trust the user or autoPlay
            });
        }


    }, [currentIndex]);

    return (
        <div
            className="hero-carousel"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
            {mediaItems.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {item.type === 'video' ? (
                        <video
                            ref={index === currentIndex ? videoRef : null}
                            src={item.src}
                            className="carousel-media"
                            muted
                            playsInline
                            autoPlay={index === currentIndex}
                            loop={false}
                            preload="metadata"
                            onEnded={handleVideoEnd}
                            onError={(e) => {
                                console.error("Video error:", e);
                                handleVideoEnd();
                            }}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    ) : (
                        <img
                            src={item.src}
                            alt={`Slide ${index + 1}`}
                            className="carousel-media"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    )}
                    <div className="carousel-overlay"></div>
                </div>
            ))}
        </div>
    );
};

export default HeroCarousel;
