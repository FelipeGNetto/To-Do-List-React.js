import React, { useState } from "react";
import Card from './Card';

function List(props) {
  const [checkedItems, setCheckedItems] = useState([]);

  function toggleCheckbox(item) {
    if (checkedItems.includes(item.id)) {
      setCheckedItems(checkedItems.filter((id) => id !== item.id));
    } else {
      setCheckedItems([...checkedItems, item.id]);
    }
  }

  return (
    <ul>
      {props.items.map((item) => (
        <li  key={item.id}>
         <Card className={checkedItems.includes(item.id) ? "done item" : "item"}>
          {item.text}
          <div className="btns">
          <input
            type="checkbox"
            id={`checkbox_${item.id}`}
            checked={checkedItems.includes(item.id)}
            onChange={() => toggleCheckbox(item)}
          />
          <label htmlFor={`checkbox_${item.id}`}></label>
          <button className="btnApagar" onClick={() => props.onItemDeleted(item)}>
            <img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="Delete" />
          </button>
          </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default List;