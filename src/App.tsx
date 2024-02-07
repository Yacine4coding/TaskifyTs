

import React, { useState } from "react";
import "./App.css";
import InputField from "./Componants/InputField";
import { Todo } from "./Componants/model";
import TodoList from "./Componants/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      settodos([...todos, { id: Date.now(), todo, isDone: false}]);
      settodo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify </span>
        <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
        <TodoList 
        todos={todos} 
        settodos={settodos} 
        setCompletedTodos={setCompletedTodos}
        completedTodos={completedTodos}
        />
      </div>
    </DragDropContext>
    
  )
}

export default App