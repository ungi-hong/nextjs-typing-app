import { useEffect, useState, useCallback } from "react"
import WordList from "utils/WordList"
import MistakeCharacter from "components/MistakeCharacter"
import style from "styles/WordContent.module.scss"

interface Props {
  onInputKey: string
  updateScoreCount: () => void
  updateMistakeCount: () => void
  mistakeCount: number
  scoreCount: number
}

const WordContent: React.FC<Props> = ({
  onInputKey,
  updateScoreCount,
  updateMistakeCount,
  mistakeCount,
  scoreCount,
}) => {
  const [JapaneseWord, setJapaneseWord] = useState("")
  const [englishWord, setEnglishWord] = useState("")
  const [characterCurrentIndex, setCharacterCurrentIndex] = useState(0)
  const [mistakeElements, setMistakeElements] = useState<JSX.Element[]>([])

  const onInputMistakeKey = useCallback(() => {
    // MEMO: タイピングミスをした時
    const NewMistakeElements = [
      ...mistakeElements,
      <MistakeCharacter key={mistakeCount} mistakeCharacter={onInputKey} />,
    ]
    setMistakeElements(NewMistakeElements)
  }, [onInputKey])

  useEffect(() => {
    // MEMO: キーが押されonInputKeyが変更された時
    if (!onInputKey) {
      return
    }

    if (onInputKey !== englishWord[characterCurrentIndex]) {
      updateMistakeCount()
      if (onInputKey.length === 1) {
        onInputMistakeKey()
      }
      return
    }

    setMistakeElements([])
    setCharacterCurrentIndex(characterCurrentIndex + 1)

    if (englishWord.length === characterCurrentIndex + 1) {
      updateScoreCount()
    }
  }, [onInputKey])

  useEffect(() => {
    const randomWord =
      WordList.words[Math.floor(Math.random() * WordList.words.length)]
    setJapaneseWord(randomWord.japanese)
    setEnglishWord(randomWord.english)
    setCharacterCurrentIndex(0)
  }, [scoreCount])

  return (
    <div className={style.textContent}>
      <p>
        <span className={style.clearCharacter}>
          {englishWord.slice(0, characterCurrentIndex)}
        </span>
        <span className={style.currentCharacter}>
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
