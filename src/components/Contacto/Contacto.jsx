import React, { useEffect, useRef } from 'react'
import styles from './Contacto.module.css'
import { getImageUrl } from '../../utils'

export const Contacto = () => {
    const containerRef = useRef();

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://platform.docplanner.com/js/widget.js"]');

    // Si el script ya está cargado, reejecutamos el procesamiento
    if (existingScript) {
      window.zlw && window.zlw.onload();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.docplanner.com/js/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     // script.src = "/path/to/resource.js";
    //     script.async = true;
    //     script.onload = !function ($_x, _s, id) {
    //         var js, fjs = $_x.getElementsByTagName(_s)[0];
    //         if (!$_x.getElementById(id)) {
    //             js = $_x.createElement(_s);
    //             js.id = id;
    //             js.src = "//platform.docplanner.com/js/widget.js";
    //             fjs.parentNode.insertBefore(js, fjs);
    //         }
    //     }
    //         (document, "script", "zl-widget-s");

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, [])

    return (

        <section className={styles.container} id="contacto">
            <h2 className={`${styles.title}`}>Programa tu cita</h2>
            <div className={styles.contactContainer}>
                <div className={styles.doctoraliaContainer} ref={containerRef}>
                    <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/gerardo-padron-lagunes/dentista-odontologo/veracruz" rel="nofollow" data-zlw-doctor="gerardo-padron-lagunes" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Dr. Gerardo Padrón Lagunes - Doctoralia.com.mx</a>
                </div>
                {/* <div className={styles.doctoraliaContainer}>
                    <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/miguel-eric-garcia-mendez-2/dentista-odontologo/xalapa" rel="nofollow" data-zlw-doctor="miguel-eric-garcia-mendez-2" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Dr. Miguel Erick García Méndez - Doctoralia.com.mx</a>
                </div> */}
                {/* <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/jorge-garcia-gonzalez/quiropractico/santiago-de-queretaro" rel="nofollow" data-zlw-doctor="jorge-garcia-gonzalez" data-zlw-type="big" data-zlw-opinion="true" data-zlw-hide-branding="true">Jorge García González - Doctoralia.com.mx</a> */}
                {/* <a id="zl-url" className="zl-url" href="https://www.doctoralia.es/marta-laorga-fuentes/psicologo/mostoles" rel="nofollow" data-zlw-doctor="marta-laorga-fuentes" data-zlw-type="big" data-zlw-opinion="false" data-zlw-hide-branding="true">Marta Laorga Fuentes - Doctoralia.es</a> */}

                <div className={styles.contactContent}>
                    <div className={styles.formContainer}>
                        <p>Ponte en contacto para coordinar una cita</p>
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
                        </form>
                    </div>
                    <ul className={styles.links}>
                        <li className={styles.link}>
                            <img src={getImageUrl("contacto/email.png")} alt="" />
                            {/* <div className={styles.textContent}>
                                <p>Escríbenos al E-mail</p>
                                <a href="">contacto@gmail.com</a>
                            </div> */}
                        </li>
                        <div className={styles.border}></div>
                        <li className={styles.link}>
                            <img src={getImageUrl("contacto/whatsapp.png")} alt="" />
                            {/* <div className={styles.textContent}>
                                <p>Chatea con Nosotros</p>
                                <a href="">228 233 2385</a>
                            </div> */}
                        </li>
                        <div className={styles.border}></div>
                        <li className={styles.link}>
                            <img src={getImageUrl("contacto/telefono.png")} alt="" />
                            {/* <div className={styles.textContent}>
                                <p>Llámanos</p>
                                <a href="">228 233 4585</a>
                            </div> */}
                        </li>
                        <div className={styles.border}></div>
                        <li className={styles.link}>
                            <img src={getImageUrl("contacto/ubicacion.png")} alt="" />
                            {/* <div className={styles.textContent}>
                                <p>Visítanos</p>
                                <a href="">Av. Orizaba 329, Fracc. Veracruz, 91020 Xalapa, Veracruz.</a>
                            </div> */}
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    )
}
