import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImg, afterImg }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(100, (x / width) * 100));
            setSliderPosition(percentage);
        }
    };

    const onMouseDown = () => {
        isDragging.current = true;
    };

    const onMouseMove = (e) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    const onTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            isDragging.current = false;
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <div
            className="before-after-slider"
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onClick={(e) => handleMove(e.clientX)}
        >
            {/* After Image (Full Background) */}
            <img
                src={afterImg}
                alt="After treatment"
                className="slider-image slider-image--after"
                draggable="false"
            />

            {/* Before Image (Clipped) */}
            <div
                className="slider-clipper"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImg}
                    alt="Before treatment"
                    className="slider-image slider-image--before"
                    draggable="false"
                />
            </div>

            {/* Labels */}
            <span className="slider-label slider-label--before">Before</span>
            <span className="slider-label slider-label--after">After</span>

            {/* Handle */}
            <div
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
            />
        </div>
    );
};

export default BeforeAfterSlider;
