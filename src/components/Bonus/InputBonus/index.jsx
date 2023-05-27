import React from 'react'
import styles from './InputBonus.module.scss'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function InputBonus() {
    const [valorBonus, setValorBonus] = useState(0);
    
    const aumenta = () => {
        setValorBonus( valorBonus + 1)
    }
    const diminui = () => {
        setValorBonus( valorBonus - 1)
    }

    return (
        <div className={styles.inputBonus}>
            <span>{valorBonus}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={aumenta}><FaPlusCircle /></button>
                <button className={styles.botao} onClick={diminui}><FaMinusCircle /></button>
            </div>
        </div>
    )
}
