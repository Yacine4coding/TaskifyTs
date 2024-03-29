import React,{useRef} from "react";
import "./style.css"

interface Props{
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({ todo, settodo, handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form action="" className="input" onSubmit={(e) =>{
          handleAdd(e);
          inputRef.current?.blur();
        }}>
        <input 
        type="input" 
        ref={inputRef} 
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder='Enter Task' 
        className='input__box' />
        <button className="input_submit" type='submit' >Go</button>
    </form>
  )
}

export default InputField