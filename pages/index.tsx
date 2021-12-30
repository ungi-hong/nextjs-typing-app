import { useState, useEffect, useCallback } from "react"
import type { NextPage } from "next"
import { Keyboard, WordContent, Score, Timer, Modal } from "components/index"
import style from "styles/Home.module.scss"

const Home: NextPage = () => {
  const [onInputKey, setInputKey] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [scoreCount, setScoreCount] = useState(0)
  // const [timer, setTimer] = useState(60)
  console.log(scoreCount)

  const updateScoreCount = () => {
    setScoreCount(scoreCount + 1)
  }

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [setIsOpenModal])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      setInputKey(e.key)
      setTimeout(() => {
        setInputKey("")
      }, 100)
      return
    }

    document.addEventListener("keydown", (e) => handleKeydown(e), false)

    return () => {
      document.removeEventListener("keydown", (e) => handleKeydown(e), false)
    }
  }, [])
  return (
    <>
      <main className={style.main}>
        <Timer openModal={openModal} />
        <Score scoreCount={scoreCount} />
        <WordContent
          onInputKey={onInputKey}
          updateScoreCount={updateScoreCount}
        />
        <Keyboard onInputKey={onInputKey} />
        <Modal isOpenModal={isOpenModal} />
      </main>
    </>
  )
}

export default Home
