import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCompareSlider.module.css';
import { getImageUrl } from '../../utils';

export const ImageCompareSlider = ({ beforeSrc, afterSrc, titulo }) => {
    const containerRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const position = ((e.clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    return (
        <div ref={containerRef} className={styles.compareContainer} onMouseMove={handleMouseMove}>
            <h3 className={styles.title}>{titulo}</h3>
            <img src={getImageUrl(afterSrc)} alt="Después" className={styles.compareImg} />

            <div className={styles.compareBefore} style={{ width: `${sliderPosition}%` }}>
                <img src={getImageUrl(beforeSrc)} alt="Antes" className={styles.compareImg} />
            </div>

            <div className={styles.compareSlider} style={{ left: `${sliderPosition}%` }}/>
        </div>
    );
};
