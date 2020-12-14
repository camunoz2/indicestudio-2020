import React from "react"
import styles from "./content.module.css"

const Content = () => {
    return(
        <div className={styles.container}>
            <aside className={styles.aside}>
                <h2 className={styles.asideTitle}>
                    Ninhue, cultura viva - ilustraciones personalizadas sobre hitos culturales del pueblo.
                </h2>
                <div className={styles.line}/>
                <ul className={styles.list}>
                    <li className={styles.listItem}>ilustracion</li>
                    <li className={styles.listItem}>city branding</li>
                </ul>
            </aside>
            <section className={styles.section}>
                <div className={styles.title}>el desafio</div>
                <p className={styles.par}>
                Ninhue es una zona de Chile central, conocida por sus chupallas y por ser la cuna de Arturo Prat, sin embargo, no posee una identidad gráfica que la caracterize, y un concejal de la zona, me pidió que diseñara una imagen corporativa para la zona.
                </p>
                <p className={styles.par}>
                El tema a mi me encantó, principalmente por que me gusta el city branding o branding de ciudad, siempre he seguido a las cuentas publicitarias de la ciudad Melbourne por ejemplo, que hacen un trabajo espectacular al mostrar no sólo una ciudad con atractivo turístico, sino que dibujar el alma de la ciudad desde el diseño de sus parques, documentos tributarios, municipio, vestimentas. Lo que el turista ve, es coherencia visual, y por lo tanto organización, y esto lleva de por sí felicidad.
                </p>
                <div className={styles.title}>el proceso</div>
                <p className={styles.par}>
                Decidí realizar una exploración, de los hitos mas importantes de la comuna: las chupallas, el museo de Prat y al mismo Arturo Prat. Quize adoptar una técnica que Patrick Seymour hizo famosa en la portada de Adobe Ilustrator que utiliza la herramienta de pluma del mismo programa y luego duplica esas formas para presentar colores y texturas. Esta idea, además de ser visualmente agradable, tiene un parecido a las texturas que tienen las artesanías del trigo como las cuelchas de las que se constryen las chupallas.
                </p>
                <p className={styles.cite}>
                "El turista se siente cómodo cuando la ciudad que visita, muestra coherencia gráfica, ese es el poder del city branding"
                </p>
                <div className={styles.title}>el resultado</div>

            </section>
        </div>
    )
}

export default Content