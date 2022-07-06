import React from "react";

function InputArea({ change, addNewItem, inputText }) {
  return (
    <div className="form">
      <input onChange={change} type="text" value={inputText} />
      <button onClick={addNewItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
