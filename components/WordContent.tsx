import { useEffect, useState, useCallback } from "react"
import WordList from "utils/WordList"
import MistakeCharacter from "components/MistakeCharacter"
import style from "styles/WordContent.module.scss"

interface Props {
  inputKey: string
}

const WordContent: React.FC<Props> = ({ inputKey }) => {
  const [JapaneseWord, setJapaneseWord] = useState("")
  const [englishWord, setEnglishWord] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMistake, setIsMistake] = useState(false)
  const [scoreCount, setScoreCount] = useState(0)
  const [mistakeCharacters, setMistakeCharacters] = useState<string[]>([])
  const [mistakeElements, setMistakeElements] = useState<JSX.Element[]>([])
  // const [mistakeCount, setMistakeCount] = useState(0)

  const onInputMistakeKey = useCallback(() => {
    const NewMistakeCharacters = [...mistakeCharacters, inputKey]
    NewMistakeCharacters.map((mistakeCharacter, index) => {
      const NewMistakeElements = [
        ...mistakeElements,
        <MistakeCharacter key={index} mistakeCharacter={mistakeCharacter} />,
      ]
      setMistakeElements(NewMistakeElements)
    })
    setMistakeCharacters(NewMistakeCharacters)
  }, [inputKey])

  useEffect(() => {
    // MEMO: キーが押されinputKeyが変更された時

    if (!inputKey) {
      console.log("are")
      return
    }

    if (inputKey !== englishWord[currentIndex]) {
      if (inputKey.length === 1) {
        onInputMistakeKey()
      }
      return
    }
    setMistakeElements([])
    setMistakeCharacters([])
    setCurrentIndex(currentIndex + 1)

    if (englishWord.length === currentIndex + 1) {
      const randomWord =
        WordList.words[Math.floor(Math.random() * WordList.words.length)]
      setJapaneseWord(randomWord.japanese)
      setEnglishWord(randomWord.english)
      setCurrentIndex(0)
    }
  }, [inputKey])

  useEffect(() => {
    const randomWord =
      WordList.words[Math.floor(Math.random() * WordList.words.length)]
    setJapaneseWord(randomWord.japanese)
    setEnglishWord(randomWord.english)
  }, [])

  return (
    <div className={style.textContent}>
      <p>
        <span className={`${style.wordText} ${style.clearCharacter}`}>
          {englishWord.slice(0, currentIndex)}
        </span>
        <span
          className={` ${style.currentCharacter} ${
            isMistake && style.mistakeCurrentCharacter
          }`}
        >
          {englishWord[currentIndex]}
          {mistakeElements}
        </span>

        <span>{englishWord.slice(currentIndex + 1, englishWord.length)}</span>
      </p>
      <p>{JapaneseWord}</p>
    </div>
  )
}

export default WordContent
