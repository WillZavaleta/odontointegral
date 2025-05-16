import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
import { useFetch } from '../../useFetch'
import hero from '../../data/hero.json'

export const Hero = () => {
    // const { data } = useFetch(
    //     "https://apiodonto-production.up.railway.app/hero"
    // );
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
    }, [hero])

    return (
        <section className={`${styles.container}`} id="inicio">
            <div className={`${styles.content} animate__animated animate__fadeInLeft`}>
                <h1 className={styles.title}>Servicios de Odontología en Veracruz!</h1>
                <p className={styles.description}>
                En <strong>Odontología Integral</strong> cuidamos tu salud bucal con atención personalizada, tecnología de vanguardia y un trato humano.
                </p>
                <a href="#contacto" className={styles.contactBtn}>Saca tu Cita</a>
            </div>
            <div className={`${styles.imageContainer} animate__animated animate__fadeInRight`}>
                {hero.map((heroimg, id) => {
                    return(
                        <img src={getImageUrl(heroimg.url)} key={id} alt="Mi foto" className={`${styles.heroImg} ${id === currentImage ? styles.visible: ''}`} />
                    )
                })}
            
            </div>            
            <img className={styles.dienteFondo} src={getImageUrl("servicios/tooth.png")} alt="" />
            <div className={styles.circulofondo}></div>
        </section>
    )
}
