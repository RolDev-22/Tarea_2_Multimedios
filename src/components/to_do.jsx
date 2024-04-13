import React, { useState, useEffect } from "react";
import "../style/style.to_do.css";

export default function To_Do() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete= (index)=> {
    items.filter(i=> i.id !== index);
  }

  return (
    <div className="container-To-Do">
      <form onSubmit={handleSubmit} className="form-To-Do">
        <div className="insert-form">
          <input
            type="text"
            name="textTarea"
            id="input-Tex"
            value={inputValue}
            onChange={handleChange}
            placeholder="Ingresa una tarea"
          />
          <button type="submit" id="button-Insert">
            AGREGAR
          </button>
        </div>

        <div className="body-form">
          <ul className="ulBody-Form">
            {items.map((item, index) => (
              <li key={index}>{index+1}. {item}  <button className="deleteTaks" onClick={handleDelete(index)}></button></li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
