import React from "react"
import style from "styles/Modal.module.scss"
import { useState, useEffect } from "react"

interface Props {
  isOpenModal: boolean
}

const Modal = React.memo<Props>(({ isOpenModal }) => {
  return (
    <div className={`${isOpenModal && style.openModal}`}>
      <div className={style.modalContent}>
        <p className={style.resultText}>結果発表</p>
      </div>
    </div>
  )
})

export default Modal
