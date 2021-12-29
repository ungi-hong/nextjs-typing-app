import { useState, useEffect, useCallback } from "react"
import type { NextPage } from "next"
import { Keyboard, WordContent } from "components/index"
import style from "styles/Home.module.scss"

const Home: NextPage = () => {
  const [inputKey, setInputKey] = useState("")
  const [inputValue, setInputValue] = useState("")

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    setInputValue((inputValue) => inputValue + e.key)
    setInputKey(e.key)
    setTimeout(() => {
      setInputKey("")
    }, 100)
    return
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleKeydown(e), false)

    return () => {
      document.removeEventListener("keydown", (e) => handleKeydown(e), false)
    }
  }, [])
  return (
    <main className={style.main}>
      <WordContent inputKey={inputKey} />
      <Keyboard inputKey={inputKey} />
    </main>
  )
}

export default Home
