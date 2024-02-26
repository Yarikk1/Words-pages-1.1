import { Link } from 'react-router-dom'

import './styles.css'

const ALPHABET = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я',
]

export function Alphabet() {
  return (
    <div className="Alphabet">
      {ALPHABET.map((letter, index) => {
        return (
          <Link
            to={`start-with/${letter}`}
            key={index}
            className="Alphabet__letter"
          >
            {letter}
          </Link>
        )
      })}
    </div>
  )
}
