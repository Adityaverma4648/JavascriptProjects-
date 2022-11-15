import {FaRegPlusSquare} from 'react-icons/fa';
import Form from './ToDoSrc/Form';
function ToDoList(){

  const WorkAdder = () =>{
     var myInputForm =   document.getElementById('myInputForm');
     myInputForm.classList.toggle("d-none");
  }

    return(

          <div className="compCont">
             <div className="container-fluid bg-black text-white todolist d-flex flex-column justify-content-center align-items-center" >
                 <div className='container d-flex align-items-center justify-content-between'>
                  <h3>
                    To Do List
                  </h3>
                  <div className="Addvalue d-flex align-items-center justify-content-center">
                     <button type='button' className='px-3 py-1 bg-primary text-white d-flex align-items-center justify-content-center' onClick={WorkAdder}>
                             <span className="mx-3">
                               AddWork
                             </span>
                             <span>
                             <FaRegPlusSquare />
                             </span>
                     </button>
                  </div>
                 </div>

                 {/*  form-structure */}
                 <div className="form container">
                   <div className="AddedForm" id='AddedForm'></div>  
                     <div id='myInputForm'>
                        <Form />       
                     </div>
                   </div>
                </div>

          </div>

    )

}
export default ToDoList;