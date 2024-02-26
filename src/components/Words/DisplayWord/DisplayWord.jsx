import './styles.css'

export function DisplayWord({ word }) {
  return (
    <div className="DisplayWord">
      <h1 className='DisplayWord__word'>{word}</h1>
    </div>
  )
}
