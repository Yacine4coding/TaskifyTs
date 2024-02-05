

import React, { useState } from "react";
import "./App.css";
import InputField from "./Componants/InputField";
import { Todo } from "./Componants/model";

const App: React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handleAdd = () => {};
  
  return (
    <div className="App">
      <span className="heading">Taskify </span>
      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
    </div>
  )
}

export default App