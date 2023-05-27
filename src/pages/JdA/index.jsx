import React, { useState } from 'react'
import styles from './JdA.module.scss'
import Compra from 'components/Compra/index';
import Atributos from 'components/Atributos/index';
import Raca from 'components/Raca/index';
import Bonus from 'components/Bonus/index';
import Total from 'components/Total/index';

export default function JdA() {

  const [compraAtri, useCompraAtri] = useState({
    pool: 10,
    compraFor: 0,
    compraDes: 0,
    compraCon: 0,
    compraInt: 0,
    compraSab: 0,
    compraCar: 0
})

  return (
    <section className={styles.jda}>
      <Atributos />
      <Compra valores={compraAtri} mudaValores={useCompraAtri}/>
      <Raca />
      <Bonus />
      <Total />
    </section>
  )
}
