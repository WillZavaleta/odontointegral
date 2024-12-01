import React from 'react'
import styles from './Pie.module.css'

export const Pie = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15039.656718403132!2d-96.9252353!3d19.5452977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f60c5d5f09d%3A0xb125c255f410a239!2sServicios%20BAXA%20extintores!5e0!3m2!1ses-419!2smx!4v1719001141194!5m2!1ses-419!2smx" width="1400" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className={styles.marca}>
                <p>Odontología Integral | 2024</p>
            </div>
        </footer>
    )
}
