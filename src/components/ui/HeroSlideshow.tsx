import { useState, useEffect } from 'react';

interface HeroSlideshowProps {
    images: string[];
    interval?: number;
    overlayOpacity?: string; // Tailwind opacity class e.g. "opacity-50"
}

export default function HeroSlideshow({
    images,
    interval = 5000,
    overlayOpacity = "opacity-60"
}: HeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {/* Images */}
            {images.map((img, index) => (
                <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                    />
                </div>
            ))}

            {/* Dark Overlay for Text Legibility */}
            <div className={`absolute inset-0 bg-brand-charcoal/80 ${overlayOpacity}`} />
        </div>
    );
}
