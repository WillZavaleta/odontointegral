import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Servicios.module.css'
import services from '../../data/services.json'

export const Servicios = () => {
  return (
    <section className={styles.container} id="servicios">
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <ul className={styles.services}>
            {services.map((serviceItem, id)=> {
                return(
                    <li className={styles.service} key={id}>
                        <img src={getImageUrl(serviceItem.imageSrc)} alt={serviceItem.nombre} />
                        <h3>{serviceItem.nombre}</h3>
                        <p>{serviceItem.descripcion}</p>
                        <span>Desde: {serviceItem.precio}</span>
                    </li>
                )
            })
            }

        </ul>
        <img className={styles.dienteFondo} src={getImageUrl("servicios/tooth.png")} alt="" />
    </section>
  )
}
