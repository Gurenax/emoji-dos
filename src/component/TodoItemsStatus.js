import React from 'react'

const TodoItemStatus = ({
  numberOfCompletedItems,
  numberOfIncompleteItems
}) => {
  function completedItemsDescription(numberOfCompletedItems) {
    return numberOfCompletedItems > 3 ? 'greater than 3' : numberOfCompletedItems
  }
  function incompleteItemsEmoji(numberOfIncompleteItems) {
    const emoji = Array.from('😱🙀😬😘😸😍')
    let emojiDescription = []
    for(let i=0; i<numberOfIncompleteItems; i++) {
      emojiDescription += emoji[i]
    }
    return emojiDescription
  }
  return (
    <div>
      { completedItemsDescription(numberOfCompletedItems) } : { incompleteItemsEmoji(numberOfIncompleteItems) }
    </div>
  )
}

export default TodoItemStatus