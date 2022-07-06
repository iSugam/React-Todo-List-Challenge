import React, { useState } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea"

const TodoList = () => {
  const [listItems, setListItems] = useState([
    {
      value: "Todo Item One"
    },
    {
      value: "Todo Item Two"
    }
  ]);

// Add an item to listItems
  const addItems = (inputText) => {
    if (inputText === "") return;
    setListItems([
      ...listItems,
      {
        value: inputText
      }
    ]);
  };

  // Delete or Remove an item from listItems
  const deleteItems = (id) => {

    setListItems(currentValue => {
      return currentValue.filter((item, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <InputArea addNewItem={addItems} />
        <div className="list-items">
          <ul>
            {
              listItems.map((item, index) => {
                const { value } = item
                return  <TodoItems 
                          key={index} 
                          items={value} 
                          ids= {index}
                          checkAndDelete={deleteItems}
                    />;
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
export default TodoList;
