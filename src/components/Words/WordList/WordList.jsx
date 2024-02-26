import { Link } from 'react-router-dom'
import { DATA } from '../WordsPage'

export function WordList() {
  return (
    <div className="Words">
      {DATA.map((word, index) => (
        <Link to={word} key={index} className="Words__word ">
          {word}
        </Link>
      ))}
    </div>
  )
}
