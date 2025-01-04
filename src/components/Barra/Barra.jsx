import React from 'react'
import styles from './Barra.module.css'

import { getImageUrl } from '../../utils'


export const Barra = () => {

  return (
    <section className={styles.container}>
        <ul className={styles.barraItems}>
            <li className={styles.barraItem}>
                <img src={getImageUrl("barra/pinIcon.png")} alt="" />
                <div className={styles.barraItemText}>
                    <h2>Dirección</h2>
                    <p>Av. Orizaba 329, Fracc. Veracruz, 91020</p>
                    <p>Xalapa, Veracruz</p>
                </div>
            </li>
            <li className={styles.barraItem}>
                <img src={getImageUrl("barra/telefonoIcon.png")} alt="" />
                <div className={styles.barraItemText}>
                    <h2>Teléfono</h2>
                    <p>228 232 3456</p>
                </div>
            </li>
            <li className={styles.barraItem}>
                <img src={getImageUrl("barra/emailIcon.png")} alt="" />
                <div className={styles.barraItemText}>
                    <h2>Email</h2>
                    <p>odontointegral@gmail.com</p>
                </div>
            </li>
        </ul>
    </section>
  )
}
