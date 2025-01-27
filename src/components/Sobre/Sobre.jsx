import React from 'react'
import styles from './Sobre.module.css'
import { getImageUrl } from '../../utils'

export const Sobre = () => {
  return (
    <section className={styles.container} id="nosotros">
      <img src={getImageUrl("sobre/hero3.jpg")} alt="" />
      <div className={styles.containerCV}>
        <h2 className={styles.title}>Sobre mi</h2>
        <h3>Dr. Luis Eduardo Velasco Sánchez </h3>
        <p>Soy Cirujano Dentista especialista en Ortodoncia y Ortopedia Maxilar. Me encanta mi profesión, ver el cambio no solo estético sino también de personalidad y actitud de mis pacientes al lucir una linda sonrisa. Estoy en constante capacitación acudiendo a cursos y congresos para estar actualizado y a la vanguardia.</p>
        <ul className={styles.resume}>
          <li>Universidad Veracruzana, Licenciatura en Cirujano Dentista (2010-2016)</li>
          <li>Universidad Juárez Autónoma de Tabasco, Especialidad en Ortodoncia (2018-2020)</li>
          <li>No. de cédula: 9819532 12227235</li>
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
