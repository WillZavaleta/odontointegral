import React from 'react'
import styles from './Sobre.module.css'
import { getImageUrl } from '../../utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const Sobre = () => {
  return (
    <section className={styles.container} id="nosotros">
      
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
      <div
        // variants={fadeIn('up', 0.1, 0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: true, amount: 0.7 }}

        className={styles.containerCV}>
        <h2 className={styles.title}>Sobre mi</h2>
        <h3>Dr. Gerardo Padrón Lagunes </h3>
        <p>Soy Cirujano Dentista con especialidad en Rehabilitación Oral y Estética. Cuento con más de 18 años de experiencia ayudando a mis pacientes a recuperar su sonrisa, salud bucal y confianza, a través de tratamientos personalizados y de alta calidad.
         <br /><br /> Me actualizo constantemente en nuevas tecnologías y técnicas odontológicas para ofrecer siempre lo mejor. Estoy comprometido con una atención cálida, ética y profesional, donde tu comodidad y resultados son mi prioridad.</p>
        {/* <p>Soy Cirujano Dentista especialista en Ortodoncia y Ortopedia Maxilar. Me encanta mi profesión, ver el cambio no solo estético sino también de personalidad y actitud de mis pacientes al lucir una linda sonrisa. Estoy en constante capacitación acudiendo a cursos y congresos para estar actualizado y a la vanguardia.</p> */}
        <ul className={styles.resume}>
          <li>Universidad Veracruzana, Licenciatura en Cirujano Dentista (2005)</li>
          <li>Universidad Juárez Autónoma de Tabasco, Especialidad en Ortodoncia (2016)</li>
          <li>Implantología, ESI Barcelona, 2019</li>
        </ul>
      </div>
      <motion.img
        variants={fadeIn('down', 4, 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}

        src={getImageUrl("sobre/hero3.jpg")} alt="" />
    </section>
  )
}
