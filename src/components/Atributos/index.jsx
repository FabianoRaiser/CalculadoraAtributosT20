import React from 'react'
import styles from './Atributos.module.scss'

export default function Atributos() {
  return (
    <div className={styles.atributos}>
        <h3>Atributos</h3>

        <div>
            <p className={styles.abv}>FOR</p>
            <p className={styles.nome}>Força</p>
        </div>
        <div>
            <p className={styles.abv}>DES</p>
            <p className={styles.nome}>Destreza</p>
        </div>
        <div>
            <p className={styles.abv}>CON</p>
            <p className={styles.nome}>Constituição</p>
        </div>
        <div>
            <p className={styles.abv}>INT</p>
            <p className={styles.nome}>Inteligencia</p>
        </div>
        <div>
            <p className={styles.abv}>SAB</p>
            <p className={styles.nome}>Sabedoria</p>
        </div>
        <div>
            <p className={styles.abv}>CAR</p>
            <p className={styles.nome}>Carisma</p>
        </div>
    </div>
  )
}
