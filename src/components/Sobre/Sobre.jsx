import React from 'react'
import styles from './Sobre.module.css'
import { getImageUrl } from '../../utils'

export const Sobre = () => {
  return (
    <section className={styles.container} id="nosotros">
        <img src={getImageUrl("sobre/hero3.jpg")} alt="" />
        <div className={styles.containerCV}>
            <h2 className={styles.title}>Sobre mi</h2>
            <h3>Dr. Elohim kassahtan </h3>
            <ul className={styles.resume}>
                <li>Odontólogo graduado de la UNAM</li>
                <li>Miembro de la Academia Latinoamericana de Oseointegración</li>
                <li>Miembro de la Academia de Honor de Odontología de E.E.U.U.</li>
                <li>Miembro de la Academia Internacional de Periodoncía Barcelona</li>
            </ul>
        </div>
        <div className={styles.contenedorCirculos}>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>

        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        <div className={styles.circulofondo}></div>
        </div>
    </section>
  )
}
