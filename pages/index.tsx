import { useState, useEffect, useCallback, useRef } from "react"
import type { NextPage } from "next"
import { WordContent, Score, Timer, Modal } from "components/index"
import style from "styles/Home.module.scss"
import KeysLayout from "utils/keysLayout"
import KeyItem from "components/Key"

const Home: NextPage = () => {
  const [onInputKey, setOnInputKey] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [isStarting, setIsStarting] = useState(false)
  const [scoreCount, setScoreCount] = useState(0)
  const [mistakeCount, setMistakeCount] = useState(0)
  const [onInputKeyCount, setOnInputKeyCount] = useState(0)
  const [characterCurrentIndex, setCharacterCurrentIndex] = useState(0)

  const onInputKeyRef = useRef("")
  onInputKeyRef.current = onInputKey

  const isStartingRef = useRef(false)
  isStartingRef.current = isStarting

  const updateScoreCount = useCallback(() => {
    setScoreCount((scoreCount) => scoreCount + 1)
  }, [setScoreCount])

  const updateMistakeCount = useCallback(() => {
    setMistakeCount((mistakeCount) => mistakeCount + 1)
  }, [setMistakeCount])

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [setIsOpenModal])

  const countUpCharacterCurrentIndex = useCallback(() => {
    setCharacterCurrentIndex(
      (characterCurrentIndex) => characterCurrentIndex + 1
    )
  }, [setCharacterCurrentIndex])

  const resetCharacterCurrentIndex = useCallback(() => {
    setCharacterCurrentIndex(0)
  }, [setCharacterCurrentIndex])

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpenModal(true)
      setIsStarting(false)
      setScoreCount(0)
      setMistakeCount(0)
      setOnInputKeyCount(0)
      resetCharacterCurrentIndex()
    }
    if (isOpenModal && !isStartingRef.current) {
      if (e.code === "Space" || e.code === "Enter") {
        setIsOpenModal(false)
        setIsStarting(true)
      }
      return
    }

    if (onInputKeyRef.current === e.key) {
      setOnInputKey("")
    }
    if (!isOpenModal) {
      setOnInputKeyCount((onInputKeyCount) => onInputKeyCount + 1)
      setOnInputKey(e.key)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown)

    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [isOpenModal])

  return (
    <>
      <main className={style.main}>
        <Timer openModal={openModal} isStarting={isStarting} />
        <Score scoreCount={scoreCount} />
        <WordContent
          onInputKey={onInputKey}
          updateScoreCount={updateScoreCount}
          updateMistakeCount={updateMistakeCount}
          mistakeCount={mistakeCount}
          scoreCount={scoreCount}
          countUpCharacterCurrentIndex={countUpCharacterCurrentIndex}
          resetCharacterCurrentIndex={resetCharacterCurrentIndex}
          characterCurrentIndex={characterCurrentIndex}
        />
        {KeysLayout.keys.map(({ keyLineId, keyItems }) => {
          return (
            <ul key={keyLineId} className={style.keyList}>
              {keyItems.map((key) => {
                return (
                  <li key={key.id}>
                    {key.value === onInputKey ? (
                      <KeyItem value={key.value} onInputKey={onInputKey} />
                    ) : (
                      <KeyItem value={key.value} />
                    )}
                  </li>
                )
              })}
            </ul>
          )
        })}
        <Modal
          isOpenModal={isOpenModal}
          onInputKeyCount={onInputKeyCount}
          mistakeCount={mistakeCount}
          scoreCount={scoreCount}
          isStarting={isStarting}
        />
      </main>
    </>
  )
}

export default Home
