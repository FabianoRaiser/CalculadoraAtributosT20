import React from 'react'
import InputAtri from './InputAtri'
import styles from './Compra.module.scss'

export default function Compra({ valores, mudaValores}) {
  return (
    <div className={styles.compra}>
      <div className={styles.cabecalho}>
        <h3>Valor</h3>
        <div className={styles.pontos}>
            <span className={styles.pool}>{valores.pool}</span>
            <p className={styles.text}>Pontos</p>
        </div>
      </div>
      <InputAtri valor={valores.compraFor} mudaValor={mudaValores}/>
      <InputAtri valor={valores.compraDes} mudaValor={mudaValores}/>
      <InputAtri valor={valores.compraCon} mudaValor={mudaValores}/>
      <InputAtri valor={valores.compraInt} mudaValor={mudaValores}/>
      <InputAtri valor={valores.compraSab} mudaValor={mudaValores}/>
      <InputAtri valor={valores.compraCar} mudaValor={mudaValores}/>
    </div>
  )
}
