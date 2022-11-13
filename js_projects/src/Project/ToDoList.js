import {useState} from 'react';
import {FaRegPlusSquare} from 'react-icons/fa';
import Form from './ToDoSrc/Form';
function ToDoList(){

  const [state] = useState("");
  
  const MakeWork = () =>{
  }

    return(

          <div className="compCont">
             <div className="container-fluid bg-black text-white todolist d-flex flex-column justify-content-center align-items-center" >
                 <div className='container d-flex align-items-center justify-content-between'>
                  <h3>
                    To Do List
                  </h3>
                  <div className="Addvalue d-flex align-items-center justify-content-center">
                     <button type='button' className='px-3 py-1 bg-primary text-white d-flex align-items-center justify-content-center' onClick="">
                             <span className='px-2'>
                               Add Work
                             </span>
                             <span>
                             <FaRegPlusSquare />
                             </span>
                     </button>
                  </div>
                 </div>
                 <div className="form container">
                       {/* Dynamic fetcher */}
                 <div className="AddedForm" id='AddedForm'></div>  
                       <Form />                     
                 </div>
             </div>

          </div>

    )

}
export default ToDoList;