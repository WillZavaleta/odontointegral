import React from 'react'
import styles from './Galeria.module.css'
import { getImageUrl } from '../../utils'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

export const Galeria = () => {
    const images = [
        {
            original:`${getImageUrl("galeria/galeria1.jpg")}`
        },
        {
            original:`${getImageUrl("galeria/galeria2.jpg")}`
        },
        {
            original:`${getImageUrl("galeria/galeria3.jpg")}`
        },
        {
            original:`${getImageUrl("galeria/galeria4.jpg")}`
        },
        {
            original:`${getImageUrl("galeria/galeria5.jpg")}`
        },

    ]
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Nuestro Consultorio</h2>
        <ImageGallery items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
            slideDuration={1000}
        />
    </section>
  )
}
