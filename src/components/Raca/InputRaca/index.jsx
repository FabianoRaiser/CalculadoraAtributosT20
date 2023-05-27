import React from 'react'
import styles from './InputRaca.module.scss'

export default function InputRaca({ lista, mudaRaca, aplicaAtributo }) {

  const selectRaca = (event) => {
    mudaRaca(event.target.value);
    aplicaAtributo();
  }


  return (
    <select
      name="raca"
      id="selectRaca"
      className={styles.inputRaca}
      onChange={selectRaca}>
      <option value="">Selecione a Raça</option>
      {lista.map(raca => {
        return <option
          key={raca.id}
          value={raca.id}
        >{raca.nome}</option>
      })}
    </select>
  )
}
