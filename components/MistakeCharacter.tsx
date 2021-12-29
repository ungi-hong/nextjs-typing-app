import style from "styles/MistakeCharacter.module.scss"

interface Props {
  mistakeCharacter: string
}

const MistakeCharacter: React.FC<Props> = ({ mistakeCharacter }) => {
  return (
    <span className={`${style.wordText} ${style.mistakeCharacter}`}>
      {mistakeCharacter}
    </span>
  )
}

export default MistakeCharacter
