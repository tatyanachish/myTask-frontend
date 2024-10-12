export const ToDo = ({task,description,date,editMyText}) => {
    return(
        <div className='container'>
        <div>
            <p>Task: {task}</p>
            <p>Description: {description}</p>
            <p>Date: {date}</p>
          
        </div>
        <div className='buttons'>
            <button className='btn' onClick={editMyText}>Edit</button>
            <button className='btn'>Delete</button>
        </div>
        </div>
    )
}