import React from "react";

const TodoItems = ({ items, checkAndDelete, ids }) => {

  return (
    <div>
      <li>
        {items}
        <span onClick={() =>checkAndDelete(ids)} className="delete">
          X
        </span>
      </li>
    </div>
  );
  
};
export default TodoItems;
