import React,{useState} from "react";

const TodoList = () => {

    const [task , setTask] = useState(['Eat breakfast', 'Take a shower', 'Walk The Dog']);
    const [newTask , setnewTask] = useState('');

    function handleInputChange(event){

        setnewTask(event.target.value)
    }
    function addTask(){
        setnewTask(t =>[...t , newTask]);
        setnewTask('')
        

    }
    function deleteTask(index){
            setTask(task.filter((_,i) => i !== index)); 
    }
    function moveTaskUp(index){

    }
    function moveTaskDown(){

    }

    
    return ( 
        <div className="To-Do-List">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter Task..."  value={newTask} onChange={handleInputChange}/>
                <button className="Add-button" onClick={addTask}>Add</button>
                <div>
                    <ol>
                        {task.map((task,index) => <li key={index}><span className="text">{task}</span>
                        <button className="Delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="Move-button" onClick={()=>moveTaskUp(index)}>🔼</button>
                        <button className="Move-button" onClick={()=>moveTaskDown(index)}>🔽</button></li>)}
                   
                       
                        
                    </ol>
                </div>
            </div>
        
        </div>
     );
}
 
export default TodoList;