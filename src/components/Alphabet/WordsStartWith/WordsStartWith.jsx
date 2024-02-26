import { useParams } from 'react-router-dom'
import { DATA } from '../../Words/WordsPage'

import './styles.css'

export function WordsStartWith() {
  const { letter } = useParams()

  const words = DATA.filter((word) => word.startsWith(letter))
  const wordsIn = DATA.filter((word) => word.includes(letter))

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
