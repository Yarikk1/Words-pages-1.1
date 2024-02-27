import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addWords, delWords, editWords } from '../../../store/ListWords'

export function WordList() {
  const words = useSelector((state) => state.words)
  const dispatch = useDispatch()
  const [activeLineIndex, setActiveLineIndex] = useState(-1)
  const [newText, setNewText] = useState('')
  const [activeInput, setActiveInput] = useState(false)

  const handleEditDone = (oldWord, newWord) => {
    dispatch(editWords({ oldWord, newWord }))
    setActiveLineIndex(-1)
  }

  const delHandler = (name) => {
    dispatch(delWords(name))
  }

  const addDoneHandler = () => {
    const pro = {
      name: newText,
    }
    dispatch(addWords(pro))
    setActiveInput(false)
    setNewText('')
  }

  const addCancelHandler = () => {
    setActiveInput(false)
    setNewText('')
    setActiveLineIndex(-1)
  }

  const handleAddWord = () => {
    setActiveInput(true)
  }

  const handleEditClick = (index) => {
    setActiveLineIndex(index)
    setNewText(words.data[index])
  }

  return (
    <div className="Words">
      <button className="btn" onClick={handleAddWord}>
        Add
      </button>
      {activeInput && (
        <div>
          <input type="text" onChange={(e) => setNewText(e.target.value)} />
          <div className="btns">
            <button onClick={addDoneHandler}>Yes</button>
            <button onClick={addCancelHandler}>No</button>
          </div>
        </div>
      )}

      {words.data.map((word, index) => (
        <div key={index}>
          {activeLineIndex === index ? (
            <div>
              <input
                type="text"
                value={newText}
                onChange={(event) => {
                  setNewText(event.target.value)
                }}
              />
              <div className="btns">
                <button onClick={() => handleEditDone(word, newText)}>
                  Yes
                </button>
                <button onClick={addCancelHandler}>No</button>
              </div>
            </div>
          ) : (
            <Link to={word} key={index} className="Words__word ">
              {word}
            </Link>
          )}

          <div className="btns">
            <button onClick={(e) => delHandler(word)}>Remove</button>
            <button
              onClick={() => {
                handleEditClick(index)
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
