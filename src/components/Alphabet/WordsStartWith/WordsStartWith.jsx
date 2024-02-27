import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './styles.css'

export function WordsStartWith() {
  const data = useSelector((state) => state.words)
  const { letter } = useParams()

  const words = data.data.filter((word) => word.startsWith(letter))
  const wordsIn = data.data.filter((word) => word.includes(letter))

  return (
    <div className="WordsStartWith">
      <div>
        <h1>Слова начинающиеся с {letter}:</h1>
        {words.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </div>

      <div>
        <h1>Слова, содержащие букву {letter}:</h1>
        {wordsIn.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </div>
    </div>
  )
}
