import React from 'react'
import InputRaca from './InputRaca'
import styles from './Raca.module.scss'

import listas from 'json/racas.json'
import { useState } from 'react';

export default function Raca() {

  const [racaAtiva, setRacaAtiva] = useState('selecione');
  const [atributos, setAtributos] = useState({
    atriFor: 0,
    atriDes: 0,
    atriCon: 0,
    atriInt: 0,
    atriSab: 0,
    atriCar: 0
  })
  const aplicaAtributo = () => {
    switch (racaAtiva) {
      case "rac__1":
        console.log({racaAtiva});
        setAtributos({
          atriFor: 0,
          atriDes: 0,
          atriCon: 0,
          atriInt: 0,
          atriSab: 0,
          atriCar: 0
        })
        break;
      case "rac__2":
        console.log({racaAtiva});
        setAtributos({ ...atributos, atriDes: 2 })
        break;
      case "rac__3":
        console.log({racaAtiva});
        break;
      case "rac__4":
        console.log({racaAtiva});
        break;
      case "rac__5":
        console.log({racaAtiva});
        break;
      case "rac__6":
        console.log({racaAtiva});
        break;
      case "rac__7":
        console.log({racaAtiva});
        break;
      case "rac__8":
        console.log({racaAtiva});
        break;
      case "rac__9":
        console.log({racaAtiva});
        break;
      case "rac__10":
        console.log({racaAtiva});
        break;
      case "rac__11":
        console.log({racaAtiva});
        break;
      case "rac__12":
        console.log({racaAtiva});
        break;
      case "rac__13":
        console.log({racaAtiva});
        break;
      case "rac__14":
        console.log({racaAtiva});
        break;
      case "rac__15":
        console.log({racaAtiva});
        break;
      case "rac__16":
        console.log({racaAtiva});
        break;
      case "rac__17":
        console.log({racaAtiva});
        break;
      case "rac__18":
        console.log({racaAtiva});
        break;

      default:
        break;
    }
  }
  return (
    <div className={styles.raca}>
      <div className={styles.titulo}>
        <h3>Raça</h3>
        <InputRaca
          lista={listas.racas}
          mudaRaca={setRacaAtiva}
          aplicaAtributo={aplicaAtributo}
        />
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriFor}</span>
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriDes}</span>
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriCon}</span>
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriInt}</span>
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriSab}</span>
      </div>
      <div className={styles.atributo}>
        <span>{atributos.atriCar}</span>
      </div>
    </div>
  )
}
