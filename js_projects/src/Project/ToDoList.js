import {useState} from 'react';
import {FaRegPlusSquare} from 'react-icons/fa';
import Form from './ToDoSrc/Form';
function ToDoList(){

  const [state] = useState("");
  
  const MakeWork = () =>{
    var AddedForm = document.getElementById("AddedForm");
    var Cont = document.createElement("div")
    Cont.classList.add("bg-secondary","text-white","container","d-flex","flex-column" );
    var checker = document.createElement("input");
    checker.type ="checkbox"
    checker.className = "py-3 px-2 border-1 border-dark bg-secondary"
    var title = document.createElement("p");
    title.classList.add("text-danger","px-2","py-3");
    title.innerHTML = "inputField";
    
    AddedForm.append(Cont)
     
    Cont.appendChild(checker);
    Cont.appendChild(title);
  }

    return(

          <div className="compCont">
             <div className="container-fluid bg-black text-white todolist d-flex flex-column justify-content-center align-items-center" >
                 <div className='container d-flex align-items-center justify-content-between'>
                  <h3>
                    To Do List
                  </h3>
                  <div className="Addvalue d-flex align-items-center justify-content-center">
                     <button type='button' className='px-3 py-1 bg-primary text-white d-flex align-items-center justify-content-center'>
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

                       {/* Dynamic fetcher */}
                     <div className="AddedForm" id='AddedForm'></div>  
                  
                   <form>
                       <Form />                     
                   </form>

                 </div>
             </div>

          </div>

    )

}
export default ToDoList;