import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const handleChange = (e) => {
    let newValue = e.target.value;
    setInputText(newValue);
  };

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

  const deleteItems = (id) => {
    setListItems(currentValue => {
      currentValue.filter(item, index) {
        return item !== currentValue
      }
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
            {listItems.map((item) => {
              return <TodoItems key={item.id} items={item.value} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TodoList;
