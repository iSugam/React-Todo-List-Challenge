import React from "react";

const TodoItems = ({ items, checkAndDelete }) => {
  return (
    <div>
      <li>
        {items}{" "}
        <span onClick={checkAndDelete} className="delete">
          X
        </span>
      </li>
    </div>
  );
};
export default TodoItems;
