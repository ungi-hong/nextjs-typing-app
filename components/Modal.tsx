import React, { useState, useEffect, useLayoutEffect } from "react"
import style from "styles/Modal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

type ModalStartContentProps = {
  showContent: boolean
}

type ModalEndContentProps = {
  clickOnceAgainBtn: () => void
  onInputKeyCount: number
  mistakeCount: number
  scoreCount: number
  showContent: boolean
}

type ModalProps = {
  clickOnceAgainBtn: () => void
  isOpenModal: boolean
  onInputKeyCount: number
  mistakeCount: number
  scoreCount: number
  isStarting: boolean
}

const ModalEndContent = React.memo<ModalEndContentProps>((props) => {
  const WrapperClassNames = props.showContent
    ? `${style.endContentWrapper} ${style.showContent}`
    : style.endContentWrapper

  return (
    <div className={WrapperClassNames}>
      <p className={style.resultTitle}>結果発表</p>

      <ul className={style.detailResultList}>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>スコア数</p>
          <p className={style.itemText}>{props.scoreCount}</p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>正しく打ったキーの数</p>
          <p className={style.itemText}>
            {props.onInputKeyCount - props.mistakeCount}回
          </p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>平均キータイプの数</p>
          <p className={style.itemText}>
            {(props.onInputKeyCount / 60).toFixed(2)}回/秒
          </p>
        </li>
        <li className={style.detailResultItem}>
          <p className={style.itemTitle}>ミスタイプの数</p>
          <p className={style.itemText}>{props.mistakeCount}回</p>
        </li>
      </ul>
      <button type="button" onClick={() => props.clickOnceAgainBtn()}>
        もう一度
      </button>
    </div>
  )
})

const ModalStartContent = React.memo<ModalStartContentProps>((props) => {
  const WrapperClassNames = props.showContent
    ? `${style.startContentWrapper} ${style.showContent}`
    : style.startContentWrapper

  return (
    <div className={WrapperClassNames}>
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

const Modal = React.memo<ModalProps>((props) => {
  const { isOpenModal, isStarting, ...modalEndContentProps } = props

  const WrapperClassNames = isOpenModal
    ? `${style.modalWrapper} ${style.openModal}`
    : `${style.modalWrapper} ${style.closeModal}`

  return (
    <div className={WrapperClassNames}>
      {/* {isStarting ? (
        <ModalEndContent {...modalEndContentProps} />
      ) : (
        <ModalStartContent />
      )} */}
      <ModalStartContent showContent={!isStarting && isOpenModal} />
      <ModalEndContent
        {...modalEndContentProps}
        showContent={isStarting && isOpenModal}
      />
    </div>
  )
})

export default Modal
