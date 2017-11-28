import React from 'react'

const TodoItem = ({
  description,
  completed = false, // if not passed, default to 'false'
  onToggleCompleted
}) => {
  return (
    <label>
      <input
        type='checkbox'
        checked={ completed }
        onChange={
          (event) => { // Event listener
            console.log('Clicked checkbox', description)
            // When user clicks checkbox
            // Notify the powers above that the
            // concept of completed has changed
            onToggleCompleted()
          }
        }
      />
      { description }
    </label>
  )
}

export default TodoItem