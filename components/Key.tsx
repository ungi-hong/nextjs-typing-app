import style from "styles/Key.module.scss"

interface Props {
  value: string
  keyName: string
  keyId: string
  inputKey: string
}

const Key: React.FC<Props> = ({ value, keyName, keyId, inputKey }) => {
  const BtnClassNames = () => {
    const classNames = [style.key]
    if (keyId === "keySpaceBar") {
      classNames.push(style.keySpaceBar)
    }
    if (inputKey === value) {
      classNames.push(style.onInputKey)
    }
    return classNames.join(" ")
  }

  return (
    <button className={BtnClassNames()} type="button">
      {keyName}
    </button>
  )
}

export default Key
