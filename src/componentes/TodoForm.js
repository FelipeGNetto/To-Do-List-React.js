import React, {useState} from "react";

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(e){
        let t = e.target.value;
        setText(t);
    }

    function addItem(e){
        e.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
        
    }

    return(
        <form>
            <input className="campoText" onChange={handleChange} type="text" value={text} placeholder="Digita sua tarefa"></input>
            <button className="addTask" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;