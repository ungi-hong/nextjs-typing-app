import React from "react"
import style from "styles/Timer.module.scss"
import { useState, useEffect } from "react"

interface Props {
  openModal: () => void
  isStarting: boolean
}

const Timer = React.memo<Props>((props) => {
  let timer: NodeJS.Timer
  const [timerCount, setTimerCount] = useState(0)

  const updateTimer = () => {
    timer =
      timer ||
      setInterval(() => {
        setTimerCount(timerCount - 1)
      }, 1000)

    if (timerCount === 0) {
      clearInterval(timer)
      props.openModal()
    }
  }

  useEffect(() => {
    updateTimer()
    return () => clearInterval(timer)
  }, [timerCount])

  useEffect(() => {
    if (props.isStarting) setTimerCount(60)
  }, [props.isStarting])

  return <p>残り: {`0${timerCount}`.slice(-2)}秒</p>
})

export default Timer
