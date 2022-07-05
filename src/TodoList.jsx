import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([
    {
      id: 0,
      value: "Todo Item One"
    },
    {
      id: 1,
      value: "Todo Item Two"
    }
  ]);

// Change input value with state
  const handleChange = (e) => {
    let newValue = e.target.value;
    setInputText(newValue);
  };

// Add an item to listItems
  const addItems = () => {
    if (inputText === "") return;
    setListItems([
      ...listItems,
      {
        id: listItems.length,
        value: inputText
      }
    ]);
    setInputText("");
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
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItems}>
            <span>Add Item</span>
          </button>
        </div>

        <div className="list-items">
          <ul>
            {
              listItems.map(item => {
                const {id, value} = item;
                return  <TodoItems 
                          key={id} 
                          items={value} 
                          checkAndDelete={() => {
                            deleteItems(id);
                          }}
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
