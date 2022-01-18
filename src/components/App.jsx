import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");

  const [currentList, setCurrentList] = useState([]);

  function changeHandle(event) {
    setListItem(event.target.value);
  }

  function addItem() {
    setCurrentList((prevItems) => {
      return [...prevItems, listItem];
    });
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" value={listItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {currentList.map((toDoItem) => {
            return <li>{toDoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
