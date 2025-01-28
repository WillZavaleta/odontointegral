import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
import hero from '../../data/hero.json'

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     if(currentImage === hero.length - 1){
        //         setcurrentImage(0)
                
        //     }else{
        //         setcurrentImage(currentImage + 1)
                
        //     }

        // }, 5000)
        // return () => {
        //     clearTimeout(timer)
        // }

        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % hero.length);
          }, 5000); // Cambiar imagen cada 5 segundos
      
          return () => clearInterval(intervalId); 
    }, [])

    return (
        <section className={styles.container} id="inicio">
            <div className={`${styles.content}`}>
                <h1 className={styles.title}>Servicios de Odontología en Xalapa, Veracruz!</h1>
                <p className={styles.description}>
                    Pon tu sonrisa en nuestras manos y vive una excelente experiencia odontológica!
                </p>
                <a href="#contacto" className={styles.contactBtn}>Saca tu Cita</a>
            </div>
            <div className={styles.imageContainer}>
                {hero.map((heroimg, id) => {
                    return(
                        <img src={getImageUrl(heroimg.url)} key={id} alt="Mi foto" className={`${styles.heroImg} ${id === currentImage ? styles.visible: ''}`} />
                    )
                })}
            
            </div>            

            <div className={styles.circulofondo}></div>
        </section>
    )
}
