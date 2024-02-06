import React from 'react';
import { Todo } from './model';
import './style.css';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, settodos }) => {
  return (
    <div className="todos">
        {
            todos.map(todo => (
                <SingleTodo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                settodos={settodos}
                />
            ))
        }
    </div>
  )
}

export default TodoList