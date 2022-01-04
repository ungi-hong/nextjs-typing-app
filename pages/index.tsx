import { useState, useEffect, useCallback, useRef } from "react"
import type { NextPage } from "next"
import { WordContent, Score, Timer, Modal } from "components/index"
import style from "styles/Home.module.scss"
import KeysLayout from "utils/keysLayout"
import KeyItem from "components/Key"

const Home: NextPage = () => {
  const [onInputKey, setOnInputKey] = useState("")
  const onInputKeyRef = useRef("")
  onInputKeyRef.current = onInputKey
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [scoreCount, setScoreCount] = useState(0)
  const [mistakeCount, setMistakeCount] = useState(0)
  const [onInputKeyCount, setOnInputKeyCount] = useState(0)

  const updateScoreCount = useCallback(() => {
    setScoreCount(scoreCount + 1)
  }, [scoreCount])

  const updateMistakeCount = useCallback(() => {
    setMistakeCount(mistakeCount + 1)
  }, [mistakeCount])

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [setIsOpenModal])

  const handleKeydown = (e: KeyboardEvent) => {
    if (onInputKeyRef.current === e.key) {
      setOnInputKey("")
    }
    setOnInputKeyCount((onInputKeyCount) => onInputKeyCount + 1)
    setOnInputKey(e.key)
  }

  useEffect(() => {
    if (!isOpenModal) {
      console.log("モーダルを開いてない")
      document.addEventListener("keydown", handleKeydown)
    } else {
      console.log("モーダルを開いてる")
      document.removeEventListener("keydown", handleKeydown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [isOpenModal])
  return (
    <>
      <main className={style.main}>
        <Timer openModal={openModal} />
        <Score scoreCount={scoreCount} />
        <WordContent
          onInputKey={onInputKey}
          updateScoreCount={updateScoreCount}
          updateMistakeCount={updateMistakeCount}
          mistakeCount={mistakeCount}
          scoreCount={scoreCount}
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
        />
      </main>
    </>
  )
}

export default Home
