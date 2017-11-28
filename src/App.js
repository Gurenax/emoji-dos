import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import TodoItem from './component/TodoItem'
import TodoItemStatus from './component/TodoItemsStatus'

// Helper function to get item index for description
const changeDescriptionOfItemAtIndex = (items, index, description) => {
  const item = items[index]
  item.description = description
  return items
}

// UI (view/controller)
class App extends Component {
  state = {
    items: [
      { description: 'First', completed: false },
      { description: 'Second', completed: true },
      { description: 'Third', completed: false },
      { description: 'Fourth', completed: true },
      { description: 'Fifth', completed: false },
    ]
  }

  // onToggleItemAtIndex = (index) => {
  //   // Data (model)
  //   this.setState( (prevState) => {
  //     // Get curent items
  //     const items = prevState.items
  //     // Find the item with the particular 'index'
  //     const item = items[index]
  //     // Toggle completed: f -> t, t -> f
  //     item.completed = !item.completed
  //     // Return the changes we have
  //     return {
  //       items: items
  //     }
  //   })
  // }
  
  onToggleItemAtIndex = (index) => {
    // Data (model)
    this.setState( (prevState) => {
      const beforeItems = prevState.items
      const afterItems = beforeItems.map( (item, currentIndex) => {
        // WHen we have found the index of the item to change
        if (currentIndex === index) {
          // Long way:
          // const copy = Object.assign(
          //   {}, // Start with a new blank object
          //   item, // Copy key-value pairs form existing items
          //   { completed: !item.completed } // Override the completed to be the opposite of before
          // )
          // Modern way:
          const copy = {
            ...item, // Copy the key-value pairs in item
            completed: !item.completed  // Override the completed to be the opposite of before
          }
          return copy
        }
        // No changes to make to this particular item
        else {
          return item
        }
      })
      
      // // Get curent items
      // const items = prevState.items
      // // Find the item with the particular 'index'
      // const item = items[index]
      // // Toggle completed: f -> t, t -> f
      // item.completed = !item.completed
      // // Return the changes we have
      // return {
      //   items: items
      // }

      // Return the changes we have
      return {
        items: afterItems
      }
    })
  }

  onChangeItemDescriptionAtIndex = (index, description) => {
    this.setState( (prevState) => {
      // const beforeItems = prevState.items
      // const afterItems = beforeItems.map( (item, currentIndex) => {
      //   // WHen we have found the index of the item to change
      //   if (currentIndex === index) {
      //     const copy = {
      //       ...item,
      //       description: description
      //     }
      //     return copy
      //   }
      //   else {
      //     return item
      //   }
      // })
      
      // return {
      //   items: afterItems
      // }
      let items = prevState.items
      items = changeDescriptionOfItemAtIndex(items, index, description)
      return { items }
    })
  }

  render() {
    const items = this.state.items
    const total = items.length

    let totalCompleted = 0
    let totalIncomplete = 0
    items.map( item => {
      if( item.completed ) {
        totalCompleted += 1
      }
      else {
        totalIncomplete += 1
      }
      return null
    })

    function filterCompletedItems(items) {
      return items.filter( item => {
        return item.completed
      })
    }
  
    function filterIncompleteItems(items) {
      return items.filter( item => {
        return !item.completed
      })
    }

    return (
      <div className="App">
        <dl>
          <dt><strong>Total</strong></dt>
          <dd>{ total }</dd>

          <dt><strong>Total Completed</strong></dt>
          <dd>{ totalCompleted }</dd>

          <dt><strong>Total Incomplete</strong></dt>
          <dd>{ totalIncomplete }</dd>
        </dl>
        {/* {
          items.map( (item, index) => (
            <TodoItem
              key={ index }
              description={ item.description }
              completed={ item.completed }
              onToggleCompleted={ () => {
                  console.log('TodoItem onToggleCompleted received', index)
                  this.onToggleItemAtIndex(index)
                }
              }
              onChangeItemDescription={ ( description ) => {
                  console.log('Item changing for index', index, description)
                  this.onChangeItemDescriptionAtIndex(index, description)
                }
              }
            />
          ))
        } */}
        <div className="completedItems">
          <h2>Completed Items</h2>
          {
            items.map( (item, index) => {
              if (item.completed) {
                return (
                  <TodoItem
                    key={ index }
                    description={ item.description }
                    completed={ item.completed }
                    onToggleCompleted={ () => {
                      console.log('TodoItem onToggleCompleted received', index)
                      this.onToggleItemAtIndex(index)
                    } }
                    onChangeItemDescription={ ( description ) => {
                      console.log('Item changing for index', index, description)
                      this.onChangeItemDescriptionAtIndex(index, description)
                    } }
                  />
                )
              }
              return null
            })
          }
        </div>

        <div className="incompleteItems">
          <h2>Incomplete Items</h2>
          {
            items.map( (item, index) => {
              if (!item.completed) {
                return (
                  <TodoItem
                    key={ index }
                    description={ item.description }
                    completed={ item.completed }
                    onToggleCompleted={ () => {
                      console.log('TodoItem onToggleCompleted received', index)
                      this.onToggleItemAtIndex(index)
                    } }
                    onChangeItemDescription={ ( description ) => {
                        console.log('Item changing for index', index, description)
                        this.onChangeItemDescriptionAtIndex(index, description)
                    } }
                  />
                )
              }
              return null
            })
          }
        </div>

        <br/>
        <TodoItemStatus
          numberOfCompletedItems={ filterCompletedItems(items).length }
          numberOfIncompleteItems={ filterIncompleteItems(items).length }
        />
      </div>
    )
  }
}

export default App
