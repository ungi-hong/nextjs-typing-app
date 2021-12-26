import style from "components/Key.module.scss"

interface Props {
  keyName: string
  keyId: string
}

const Key: React.FC<Props> = ({ keyName, keyId }) => {
  console.log(style.key)
  return (
    <button className={`${style.key} ${style.keySpaceBar}`} type="button">
      {keyName}
    </button>
  )
}

export default Key
