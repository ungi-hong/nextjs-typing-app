import KeysLayout from "utils/keysLayout"
import Key from "components/Key"
import style from "components/Keyboard.module.scss"

const Keyboard = () => {
  return (
    <>
      {KeysLayout.keysList.map((keyRow) => {
        return (
          <ul className={style.keyList} key={keyRow.keysRowId}>
            {keyRow.keysRowItems.map((key) => {
              return (
                <li key={key.id}>
                  <Key keyName={key.keyName} keyId={key.id} />
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
