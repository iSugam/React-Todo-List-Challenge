import React,{ useState } from "react";

function InputArea({ addNewItem }) {
  const [inputText, setInputText] = useState("");

  // Change input value with state
  const handleChange = (e) => {
    let newValue = e.target.value;
    setInputText(newValue);
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {
        addNewItem(inputText);
        setInputText("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
