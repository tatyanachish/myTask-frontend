import { MdEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

export const ToDo = ({task,description,date,editMyText}) => {
    return(
        <div>
            <div className="line">
                <div className="block">
                    <p>Task: {task}</p>
                    <MdEdit onClick={editMyText} />
                    <MdDeleteSweep />
                </div>
                <div className="block">
                    <p>Description: {description}</p> 
                </div>
                <div className="block">
                    <p>Date</p>  
                </div>
            </div>
        </div>
    )
}