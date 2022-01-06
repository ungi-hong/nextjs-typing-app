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

const ModalEndContent = React.memo<Props>(() => {
  return (
    <>
      <p className={style.resultTitle}>結果発表</p>

      <ul className={style.detailResultList}>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>スコア数</p>
          <p className={style.itemText}>{scoreCount}</p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>正しく打ったキーの数</p>
          <p className={style.itemText}>{onInputKeyCount - mistakeCount}回</p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>平均キータイプの数</p>
          <p className={style.itemText}>
            {(onInputKeyCount / 60).toFixed(2)}回/秒
          </p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>ミスタイプの数</p>
          <p className={style.itemText}>{mistakeCount}回</p>
        </li>
      </ul>
    </>
  )
})

export default Modal
