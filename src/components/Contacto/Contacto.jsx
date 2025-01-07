import React from 'react'
import styles from './Contacto.module.css'
import { getImageUrl } from '../../utils'

export const Contacto = () => {
    return (
        <section className={styles.container} id="contacto">
            <h2 className={styles.title}>Contacto</h2>
            <div className={styles.contactContent}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contacto/email.png")} alt="" />
                        <div className={styles.textContent}>
                            <p>Escríbenos al E-mail</p>
                            <a href="">contacto@gmail.com</a>
                        </div>
                    </li>
                    <div className={styles.border}></div>
                    <li className={styles.link}>
                        <img src={getImageUrl("contacto/whatsapp.png")} alt="" />
                        <div className={styles.textContent}>
                            <p>Chatea con Nosotros</p>
                            <a href="">228 233 2385</a>
                        </div>
                    </li>
                    <div className={styles.border}></div>
                    <li className={styles.link}>
                        <img src={getImageUrl("contacto/telefono.png")} alt="" />
                        <div className={styles.textContent}>
                            <p>Llámanos</p>
                            <a href="">228 233 4585</a>
                        </div>
                    </li>
                    <div className={styles.border}></div>
                    <li className={styles.link}>
                        <img src={getImageUrl("contacto/ubicacion.png")} alt="" />
                        <div className={styles.textContent}>
                            <p>Visítanos</p>
                            <a href="">Av. Orizaba 329, Fracc. Veracruz, 91020 Xalapa, Veracruz.</a>
                        </div>
                    </li>
                </ul>
                <div className={styles.formContainer}>
                    {/* <p>Ponte en contacto para coordinar una cita</p>
                <form className={`${styles.formulario}`}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" required />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Teléfono</label>
                    <input type="text" name="user_phone" required />
                    <label>Mensaje</label>
                    <textarea name="message" required />
                    <input type="submit" value="Enviar" />
                </form> */}
                </div>
                    <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/luis-eduardo-velasco-sanchez/dentista-odontologo/xalapa" rel="nofollow" data-zlw-doctor="luis-eduardo-velasco-sanchez" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Dr. Luis Eduardo Velasco Sánchez - Doctoralia.com.mx</a>
                    <a id="zl-url" className="zl-url" href="https://www.doctoralia.es/marta-laorga-fuentes/psicologo/mostoles" rel="nofollow" data-zlw-doctor="marta-laorga-fuentes" data-zlw-type="big" data-zlw-opinion="false" data-zlw-hide-branding="true">Marta Laorga Fuentes - Doctoralia.es</a>
                
            </div>
        </section>
    )
}
