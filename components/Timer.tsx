import React from "react"
import style from "styles/Timer.module.scss"
import { useState, useEffect } from "react"

interface Props {
  openModal: () => void
}

const Timer = React.memo<Props>(({ openModal }) => {
  let timer: NodeJS.Timer
  const [timerCount, setTimerCount] = useState(60)

  const updateTimer = () => {
    timer =
      timer ||
      setInterval(() => {
        setTimerCount(timerCount - 1)
      }, 1000)

    if (timerCount === 0) {
      clearInterval(timer)
      openModal()
    }
  }

  useEffect(() => {
    updateTimer()
    return () => clearInterval(timer)
  }, [timerCount])

  return <p>残り: {`0${timerCount}`.slice(-2)}秒</p>
})

export default Timer
