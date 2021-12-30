import style from "styles/Modal.module.scss"
import { useState, useEffect } from "react"

interface Props {
  isOpenModal: boolean
}

const Modal: React.FC<Props> = ({ isOpenModal }) => {
  return (
    <div className={`${isOpenModal && style.openModal}`}>
      aiueo
      <p className={style.resultText}>結果発表</p>
    </div>
  )
}

export default Modal
