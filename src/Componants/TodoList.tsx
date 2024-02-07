import React from 'react';
import { Todo } from './model';
import './style.css';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]; 
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, settodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
            <div className="todos" >
                <span className="todos__heading">Active tasks</span>
                {todos.map((todo) => (
                    <SingleTodo 
                      todo={todo} 
                      todos={todos} 
                      key={todo.id} 
                      settodos={settodos} />
                  ))
                }
            </div>
          
            <div className="todos remove" >
              <span className="todos__heading">Completed tasks</span>
                {completedTodos.map((todo) => (
                    <SingleTodo 
                    todo={todo} 
                    todos={completedTodos} 
                    key={todo.id} 
                    settodos={setCompletedTodos} />
                ))
                }
            </div>
      
    </div>
  )

  
}

export default TodoList