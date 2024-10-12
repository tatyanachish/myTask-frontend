
import './App.css';
import {useEffect, useState} from 'react';
import { ToDo } from './ToDo';
import { addTask, getAllTasks } from './FetchTasks';

function App() {
  const [myTask,setTask] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
 
 
  useEffect(()=> {
    getAllTasks(setTask)
  },[])

 
  

  return (
    <div>
        <div className='headliner'>
          <h1>MY TO-DO LIST</h1>
        </div>    
        <div className='inputs'>
          <input type='text' placeholder='Task'
          value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type='text' placeholder='Description'
          value={description} onChange={(e) => setDescription(e.target.value)}/>
          <input type='date' placeholder='Expiration date'/>
          <button className='btn' onClick={()=>addTask(title,setTitle,setTask)}>Add task</button>
        </div>  
        <div className='cards'>     
          {myTask.map((task)=><ToDo task={task.title} description={task.description} date={task.date} key={task._id}/>
          )}
        </div>
    </div>
  );
}

export default App;
