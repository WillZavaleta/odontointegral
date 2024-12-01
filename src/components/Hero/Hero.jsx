import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container} id="inicio">
            <div className={`${styles.content}`}>
                <h1 className={styles.title}>Servicios de Odontología en Xalapa, Veracruz!</h1>
                <p className={styles.description}>
                    Pon tu sonrisa en nuestras manos y vive una excelente experiencia odontológica!
                </p>
                <a href="#contacto" className={styles.contactBtn}>Saca tu Cita</a>
            </div>

            <img src={getImageUrl("hero/hero.jpg")} alt="Mi foto" className={`${styles.heroImg}`} />

            <div className={styles.circulofondo}></div>
        </section>
    )
}
