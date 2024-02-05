import React from "react";
import "./style.css"

interface Props{
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: ()=>void;
}

const InputField:React.FC<Props> = ({ todo, settodo, handleAdd}) => {
  return (
    <form action="" className="input">
        <input type="input" 
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder='Enter Task' className='input__box' />
        <button className="input_submit" type='submit' >Go</button>
    </form>
  )
}

export default InputField