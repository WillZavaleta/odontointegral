import React from 'react'
import styles from './Pie.module.css'

export const Pie = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.008475196106!2d-96.93023819999999!3d19.541249699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb6caa9fe35%3A0x8d57439935a12171!2sDr.%20Luis%20Eduardo%20Velasco%20S%C3%A1nchez%2C%20Dentista%20-%20Odont%C3%B3logo!5e0!3m2!1ses-419!2smx!4v1736025801145!5m2!1ses-419!2smx" width="1400" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className={styles.marca}>
                <p>Odontología Integral | 2024</p>
            </div>
        </footer>
    )
}
