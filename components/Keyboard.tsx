import KeysLayout from "utils/keysLayout"
import Key from "components/Key"
import style from "styles/Keyboard.module.scss"

interface Props {
  inputKey: string
}

const Keyboard: React.FC<Props> = ({ inputKey }) => {
  return (
    <>
      {KeysLayout.keysList.map((keyRow) => {
        return (
          <ul className={style.keyList} key={keyRow.keysRowId}>
            {keyRow.keysRowItems.map((key) => {
              return (
                <li key={key.id}>
                  <Key
                    keyName={key.keyName}
                    value={key.value}
                    keyId={key.id}
                    inputKey={inputKey}
                  />
                </li>
              )
            })}
          </ul>
        )
      })}
    </>
  )
}

export default Keyboard
