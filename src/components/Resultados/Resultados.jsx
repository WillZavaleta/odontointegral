import React from 'react'
import styles from './Resultados.module.css'
import results from '../../data/results.json'
import { ImageCompareSlider } from '../ImageCompareSlider/ImageCompareSlider'

export const Resultados = () => {
    return (
        <section className={styles.container} id="resultados">
            <h2 className={styles.title}>Resultados de algunos de mis pacientes</h2>
            <ul className={styles.results}>
                {results.map((resultItem, id) => {
                    return (
                        <ImageCompareSlider
                            key={id}
                            beforeSrc={resultItem.antes}
                            afterSrc={resultItem.despues}
                            titulo={resultItem.titulo}
                        />
                    )
                })
                }
            </ul>

        </section>
    )
}