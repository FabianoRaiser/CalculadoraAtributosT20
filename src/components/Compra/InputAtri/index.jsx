import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import styles from './InputAtri.module.scss'
import { useState } from "react"

const InputAtri = ({ valorAtri, mudaValor }) => {
    const [valor, setValor] = useState(0)

    const aumenta = () => {
        setValor(valor + 1);
    }

    const diminui = () => {
        setValor(valor - 1);
    }

    return (
        <div className={styles.inputAtri}>
            <span>{valor}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={aumenta}><FaPlusCircle /></button>
                <button className={styles.botao} onClick={diminui}><FaMinusCircle /></button>
            </div>
        </div>
            )
}

            export default InputAtri;