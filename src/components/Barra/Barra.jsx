import React from 'react'
import styles from './Barra.module.css'

import { getImageUrl } from '../../utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


export const Barra = () => {

    return (
        <section className={styles.container}>
            <ul className={styles.barraItems}>
                <motion.li
                    variants={fadeIn('right', 0.1, 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}

                    className={styles.barraItem}>
                    <img src={getImageUrl("barra/pinIcon.png")} alt="" />
                    <div className={styles.barraItemText}>
                        <h2>Dirección</h2>
                        <p> Américas 590 entre Grijalva y <br />Pedro de Alvarado Fracc. Virginia</p>
                        {/* <p>Xalapa, Veracruz</p> */}
                    </div>
                </motion.li>
                <motion.li
                    variants={fadeIn('right', 0.2, 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}

                    className={styles.barraItem}>
                    <img src={getImageUrl("barra/telefonoIcon.png")} alt="" />
                    <div className={styles.barraItemText}>
                        <h2>Teléfono</h2>
                        <p>228 355 6682</p>
                    </div>
                </motion.li>
                <motion.li
                    variants={fadeIn('right', 0.3, 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}

                    className={styles.barraItem}>
                    <img src={getImageUrl("barra/emailIcon.png")} alt="" />
                    <div className={styles.barraItemText}>
                        <h2>Email</h2>
                        <p>odontointegral@gmail.com</p>
                    </div>
                </motion.li>
            </ul>
        </section>
    )
}
