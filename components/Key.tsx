import { useEffect, useState } from "react"
import style from "styles/Key.module.scss"
import React from "react"

interface Props {
  value: string
  onInputKey?: string
}

const Key = React.memo<Props>(({ value, onInputKey = "" }) => {
  const [classNames, setClassNames] = useState(style.key)

  useEffect(() => {
    if (onInputKey === value) {
      setClassNames(`${style.key} ${style.onInputKey}`)
    } else if (!onInputKey) {
      setClassNames(style.key)
    }
  }, [onInputKey])

  return (
    <>
      <button className={classNames} type="button">
        {value.toUpperCase()}
      </button>
    </>
  )
})

export default Key
