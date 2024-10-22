import axios from 'axios';

const getAllTasks = (setTask) => {
    axios.get('http://localhost:7000')
    .then(({data}) => {console.log(data)
     setTask(data)
    })
}

const addTask = (title,setTitle,setTask) => {
    axios.post('http://localhost:7000/saveTasks',{title})
    .then((data) => {
        console.log(data)
        setTitle('')
        getAllTasks(setTask)
    })
}


export {getAllTasks,addTask};