import {useState} from 'react';
import {FaRegPlusSquare} from 'react-icons/fa';
import Form from './ToDoSrc/Form';
function ToDoList(){

     const  OnClickAdd = () => {
        var form = document.querySelector("form")
             form.append(
               <Form />
             )
     }
    return(

          <div className="compCont">
             <div className="container-fluid bg-black text-white todolist d-flex flex-column justify-content-center align-items-center" >
                 <div className='container d-flex align-items-center justify-content-between'>
                  <h3>
                    To Do List
                  </h3>
                  <div className="Addvalue d-flex align-items-center justify-content-center">
                     <button type='button' className='px-3 py-1 bg-primary text-white d-flex align-items-center justify-content-center' onClick={OnClickAdd}>
                             <p className='px-2'>
                               Add Work
                             </p>
                             <p>
                             <FaRegPlusSquare />
                             </p>
                     </button>
                  </div>
                 </div>
                 <div className="form container">
                 
                   <form>
                       <Form />                     
                   </form>

                 </div>
             </div>

          </div>

    )

}
export default ToDoList;