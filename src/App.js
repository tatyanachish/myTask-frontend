
import './App.css';
import {useEffect, useState} from 'react';
import { ToDo } from './ToDo';
import { getAllTasks, addTask } from './FetchTasks';


function App() {
  const [cardData,setCardData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().slice(0, 10)
    
})
  const [myTask,setTask] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setCardData({
        ...cardData,
        [name]:value
    })
}
const handleSubmit = (event) => {
    event.preventDefault()
    console.log(cardData)
}
  useEffect(()=> {
    getAllTasks(setTask)
  },[])  

  return (
    <div >
        <div className='headliner'>
          <h1>MY TO-DO LIST</h1>
        </div>  
        <div>
        <div>
          <form className="card" onSubmit={handleSubmit}>
            <label>
                <input type='text' name='title' placeholder="Task"
                value={cardData.title} onChange={handleInputChange}/>
            </label>
            <label>
                <input type='text' name='description' placeholder="Description"
                value={cardData.description} onChange={handleInputChange}/>
            </label>
            <label>
                <input type='date' name='date' 
                value={cardData.date} onChange={handleInputChange}/>
            </label>
            <button className='submit'
            onClick={()=> addTask(title,setTitle,setTask)}>Add task</button>
          </form>
        </div>          
          {myTask.map((task)=><ToDo task={task.title} description={task.description} date={task.date} key={task._id}/>
          )}
        </div> 
    </div>
  );
}

export default App;
