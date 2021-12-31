import React from "react"
import KeysLayout from "utils/keysLayout"
import KeyItem from "components/Key"
import style from "styles/Keyboard.module.scss"
interface KeyItem {
  id: string
  value: string
}

interface Props {
  onInputKey: string
}

interface KeyLineProps {
  onInputKey?: string
  keyLine: KeyItem[]
}

const KeyLine = React.memo<KeyLineProps>(({ keyLine, onInputKey = "" }) => {
  return (
    <>
      {keyLine.map((key) => {
        return (
          <li key={key.id}>
            {key.value === onInputKey ? (
              <KeyItem value={key.value} onInputKey={onInputKey} />
            ) : (
              <KeyItem value={key.value} />
            )}
          </li>
        )
      })}
    </>
  )
})

const Keyboard: React.FC<Props> = ({ onInputKey }) => {
  return (
    <>
      {KeysLayout.keys.map(({ keyLineId, keyItems }) => {
        return (
          <ul key={keyLineId} className={style.keyList}>
            {keyItems.map((key) => {
              return (
                <li key={key.id}>
                  {key.value === onInputKey ? (
                    <KeyItem value={key.value} onInputKey={onInputKey} />
                  ) : (
                    <KeyItem value={key.value} />
                  )}
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
