import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Servicios.module.css'
import services from '../../data/services.json'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const Servicios = () => {
    return (
        <section className={styles.container} id="servicios">
            <h2 className={styles.title}>Nuestros Servicios</h2>
            <ul className={styles.services}>
                {services.map((serviceItem, id) => {
                    return (
                        <motion.li
                            variants={fadeIn('up', 0.1, 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            whileHover={{
                                scale: [null, 1, 1.1],
                                transition: {
                                    duration: 0.5,
                                    times: [0, 0.6, 1],
                                    ease: ["easeInOut", "easeOut"],
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}

                            className={styles.service} key={id}>
                            <img src={getImageUrl(serviceItem.imageSrc)} alt={serviceItem.nombre} />
                            <h3>{serviceItem.nombre}</h3>
                            <p>{serviceItem.descripcion}</p>
                            <span>Desde: {serviceItem.precio}</span>
                        </motion.li>
                    )
                })
                }

            </ul>
            <img className={styles.dienteFondo} src={getImageUrl("servicios/tooth.png")} alt="" />
        </section>
    )
}
