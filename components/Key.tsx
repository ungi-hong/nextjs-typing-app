import style from "components/Key.module.scss"

interface Props {
  keyName: string
  keyId: string
}

const Key: React.FC<Props> = ({ keyName, keyId }) => {
  return (
    <button
      className={`${style.key} ${keyId === "keySpaceBar" && style.keySpaceBar}`}
      type="button"
    >
      {keyName}
    </button>
  )
}

export default Key
