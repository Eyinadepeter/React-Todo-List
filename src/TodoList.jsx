import React,{useState} from "react";

const TodoList = () => {

    const [task , setTask] = useState(['Eat breakfast', 'Take a shower', 'Walk The Dog']);
    const [newTask , setnewTask] = useState('');

    function handleInputChange(event){

        setnewTask(event.target.value)
    }
    function addTask(){
        if (newTask.trim() !== '') {
            setTask(t =>[...t , newTask]);
            setnewTask('');
            
        }
        

    }
    function deleteTask(index){
        const Delete =(task.filter((_,i) => i !== index));
        setTask(Delete)
    }
    function moveTaskUp(index){
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask)
        }

    }
    function moveTaskDown(index){
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask)
        }
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