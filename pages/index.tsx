import { useState, useEffect, useCallback } from "react"
import type { NextPage } from "next"
import { Keyboard, WordContent, Score } from "components/index"
import style from "styles/Home.module.scss"

const Home: NextPage = () => {
  const [onInputKey, setInputKey] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [scoreCount, setScoreCount] = useState(0)
  console.log(scoreCount)

  const updateScoreCount = useCallback(() => {
    setScoreCount(scoreCount + 1)
  }, [setScoreCount])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      setInputValue((inputValue) => inputValue + e.key)
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
    <main className={style.main}>
      <Score scoreCount={scoreCount} />
      <WordContent
        onInputKey={onInputKey}
        updateScoreCount={updateScoreCount}
      />
      <Keyboard onInputKey={onInputKey} />
    </main>
  )
}

export default Home
