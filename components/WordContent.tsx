import { useEffect, useState, useCallback } from "react"
import WordList from "utils/WordList"
import MistakeCharacter from "components/MistakeCharacter"
import style from "styles/WordContent.module.scss"

interface Props {
  onInputKey: string
  updateScoreCount: () => void
}

const WordContent: React.FC<Props> = ({ onInputKey, updateScoreCount }) => {
  const [JapaneseWord, setJapaneseWord] = useState("")
  const [englishWord, setEnglishWord] = useState("")
  const [characterCurrentIndex, setCharacterCurrentIndex] = useState(0)
  const [isMistake, setIsMistake] = useState(false)
  // cnst [mistakeCharacters, setMistakeCharacters] = useState<string[]>([])
  const [mistakeElements, setMistakeElements] = useState<JSX.Element[]>([])
  const [mistakeCount, setMistakeCount] = useState(0)
  const [baseClass, setBaseClass] = useState<string[]>([style.currentCharacter])

  const onInputMistakeKey = useCallback(() => {
    // MEMO: タイピングミスをした時
    setIsMistake(true)
    const NewMistakeElements = [
      ...mistakeElements,
      <MistakeCharacter key={mistakeCount} mistakeCharacter={onInputKey} />,
    ]
    setMistakeElements(NewMistakeElements)
    setIsMistake(false)
  }, [onInputKey])

  const clearWord = () => {
    // MEMO: 英単語をタイピングを終えた時
    const randomWord =
      WordList.words[Math.floor(Math.random() * WordList.words.length)]
    setJapaneseWord(randomWord.japanese)
    setEnglishWord(randomWord.english)
    setCharacterCurrentIndex(0)
    updateScoreCount()
  }

  useEffect(() => {
    // MEMO: キーが押されonInputKeyが変更された時
    if (!onInputKey) {
      return
    }

    if (onInputKey !== englishWord[characterCurrentIndex]) {
      setMistakeCount(mistakeCount + 1)
      if (onInputKey.length === 1) {
        onInputMistakeKey()
      }
      return
    }

    setMistakeElements([])
    setCharacterCurrentIndex(characterCurrentIndex + 1)

    if (englishWord.length === characterCurrentIndex + 1) {
      clearWord()
    }
  }, [onInputKey])

  useEffect(() => {
    const randomWord =
      WordList.words[Math.floor(Math.random() * WordList.words.length)]
    setJapaneseWord(randomWord.japanese)
    setEnglishWord(randomWord.english)
  }, [])

  return (
    <div className={style.textContent}>
      <p>
        <span className={style.clearCharacter}>
          {englishWord.slice(0, characterCurrentIndex)}
        </span>
        <span
          className={`${style.currentCharacter} ${
            isMistake && style.mistakeCurrentCharacter
          }`}
        >
          {englishWord[characterCurrentIndex]}
          {mistakeElements}
        </span>

        <span>
          {englishWord.slice(characterCurrentIndex + 1, englishWord.length)}
        </span>
      </p>
      <p>{JapaneseWord}</p>
    </div>
  )
}

export default WordContent
