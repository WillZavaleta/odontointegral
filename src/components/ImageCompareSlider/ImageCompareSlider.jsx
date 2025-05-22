import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCompareSlider.module.css';
import { getImageUrl } from '../../utils';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const ImageCompareSlider = ({ beforeSrc, afterSrc, titulo }) => {
    const containerRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50);

    const updateSliderPosition = (clientX) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseMove = (e) => updateSliderPosition(e.clientX);

    const handleTouchMove = (e) => {
        if (e.touches && e.touches.length > 0) {
            updateSliderPosition(e.touches[0].clientX);
        }
    };
    return (
        <motion.div
            variants={fadeIn('up', 0.1, 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            ref={containerRef} className={styles.compareContainer} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
            <h3 className={styles.title}>{titulo}</h3>
            <img src={getImageUrl(afterSrc)} alt="Después" className={styles.compareImg} />

            <div className={styles.compareBefore} style={{ width: `${sliderPosition}%` }}>
                <img src={getImageUrl(beforeSrc)} alt="Antes" className={styles.compareImg} />
            </div>

            <div className={styles.compareSlider} style={{ left: `${sliderPosition}%` }} />
        </motion.div>
    );
};
