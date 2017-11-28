import React from 'react'

const TodoItem = ({
  description,
  completed = false, // if not passed, default to 'false'
  onToggleCompleted,
  onChangeItemDescription
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
        }
      } >
      { emoji(completed) }
      </button>
      <input
        type="text"
        value={ description }
        onChange={ (event) => {
          console.log('Typed..', event.target.value)
          onChangeItemDescription( event.target.value )
        }}
      />
    </label>
  )
}

export default TodoItem