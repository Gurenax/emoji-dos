import React from 'react'

const TodoItem = ({
  description,
  completed=false // if not passed, default to 'false'
}) => {
  return (
    <label>
      <input type='checkbox' checked={ completed } />
      { description }
    </label>
  )
}

export default TodoItem