import React, { useState, useEffect } from "react"
import style from "styles/Modal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

interface Props {
  isOpenModal: boolean
  onInputKeyCount: number
  mistakeCount: number
  scoreCount: number
}

const Modal = React.memo<Props>(() => {
  return (
    <div className={style.startComment}>
      <p className={style.title}>タイピングアプリへようこそ！</p>
      <div className={style.howToContent}>
        <div className={style.noticeContent}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            size="2x"
            color="#E53935"
          />
          <p>タイピング中はキーボードを利用します。</p>
        </div>

        <p className={style.howToText}>
          【スペースキーかENTERキーを押すとスタートします。】
        </p>
      </div>
    </div>
  )
})

export default Modal
