import React from 'react'
import styles from './Bonus.module.scss'
import InputBonus from './InputBonus/index';

export default function Bonus() {
  return (
    <div className={styles.bonus}>
      <div className={styles.titulo}>
        <h3>Bonus</h3>
      </div>
      <InputBonus />
      <InputBonus />
      <InputBonus />
      <InputBonus />
      <InputBonus />
      <InputBonus />
    </div>
  )
}
