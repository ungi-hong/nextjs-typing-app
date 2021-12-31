import React from "react"
import style from "styles/Score.module.scss"

interface Props {
  scoreCount: number
}

const Score = React.memo<Props>(({ scoreCount }) => {
  return <p>スコア: {scoreCount}</p>
})

export default Score
