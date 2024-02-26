import { Link } from 'react-router-dom'
import './styles.css'

export function Menu({ onLinkClick }) {
  return (
    <nav>
      <Link to="/words" onClick={onLinkClick} className="Menu">
        Words
      </Link>
    </nav>
  )
}
