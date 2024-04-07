import {useState, useEffect} from "react";
import * as Icons from "react-icons/fa6";

export default function Todo() {
  const [input, setInput] = useState("");

  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", []);
  }

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.replace(" ", "").length == 0) {
      let todoExists = false;
      for (let i=0; i<todos.length; i++) {
        if (todos[i].text == input) {
          todoExists = true;
          alert("Cannot add item that already exists.");
          break;
        }
      }
      if (!todoExists) {
        setTodos([...todos, {text: input, id: Math.random(0, 1), done: false}]);
        document.querySelector("#input").value = "";
      }
    } else {
      alert("Cannot create blank item.");
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));
  }

  const finishTodo = (id) => {
    for (let i=0; i<todos.length; i++) {
      if (todos[i].id == id) {
        const updatedTodos = todos.map(todo => {
          return {text: todo.text, id: todo.id, done: !todo.done}
        })
        setTodos(updatedTodos);
      }
    }
  }

  return (
    <div className="body align-center">
      <p className="header">To-<span className="header-highlight">do</span></p>
      <span>
        <input type="text" id="input" onKeyDown={(event) => {
          if (event.key == "Enter") {
            addTodo(input);
          }
        }} onChange={() => setInput(document.querySelector("#input").value)} />
        <button id="submit" onClick={() => addTodo(input)}>Submit</button>
      </span>
      <div id="todos">
        {todos.map(todo => (
          <span className="todo" style={{opacity: todo.done ? "0.6" : "1"}}>
            <p className="todo-p" style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}</p>
            <span className="todo-buttons">
              <button className="todo-done" onClick={() => finishTodo(todo.id)}>
                <Icons.FaCheck />
              </button>
              <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                <Icons.FaTrash />
              </button>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}