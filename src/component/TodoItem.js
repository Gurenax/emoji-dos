import React from 'react'

const TodoItem = ({
  description,
  completed = false, // if not passed, default to 'false'
  onToggleCompleted
}) => {
  function emoji(completed) {
    return completed ? '✅' : '❎'
  }
  return (
    <label>
      <button onClick={
        (event) => { // Event listener
          console.log('Clicked checkbox', description)
          // When user clicks checkbox
          // Notify the powers above that the
          // concept of completed has changed
          onToggleCompleted()
      }} >
      { emoji(completed) }
      </button>
      
      { description }
    </label>
  )
}

export default TodoItem