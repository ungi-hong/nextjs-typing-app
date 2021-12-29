import style from "styles/Key.module.scss"
import React from "react"

interface Props {
  value: string
  onInputKey?: string
}

const Key = React.memo<Props>(({ value, onInputKey = "" }) => {
  const BtnClassNames = () => {
    const classNames = [style.key]
    if (value === " ") {
      classNames.push(style.keySpaceBar)
    }
    if (onInputKey === value) {
      classNames.push(style.onInputKey)
    }
    return classNames.join(" ")
  }

  return (
    <button className={BtnClassNames()} type="button">
      {value.toUpperCase()}
    </button>
  )
})

export default Key
