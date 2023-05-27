import React from 'react'
import styles from './Total.module.scss'

export default function Total() {
  return (
    <div className={styles.total}>
      <div className={styles.titulo}>
        <h3>Total</h3>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
      <div className={styles.atributo}>
        <span>0</span>
      </div>
    </div>
  )
}
