import {useState} from 'react';
import MyWork from '../ToDoSrc/MyWork'
import data from './data.json'


function Form(){

  const [inputField ,setInputField ] = useState('');

  const [toDoList , setToDoList] = useState(data);

  const InputHandler = (e) =>{
         setInputField(e.target.value);
  }
  const addTask = (inputField) => {
    toDoList.push({ id: toDoList.length + 1, task: inputField, complete: false });
    setToDoList(toDoList);
  }

  const setWork = (e)=>{
      e.preventDefault();
      addTask(inputField);
       setInputField("");
      
  }


    return(          <>
                     <div className="container-fluid d-flex flex-column" id='myWork'>
                            {toDoList?.map((ar)=>{ 
                                 return (<MyWork key={ar.id} work={ar} />)
                            })}
                     </div>
                     <div className='d-flex flex-column container-fluid'>
                          <div className="container formCont bg-none d-flex flex-column" id="myFormCont">
                        {/*  form */}
                         <form className='d-flex container justify-content-center align-items-center' id="myForm">
                         <input type="text" onChange={InputHandler} name="Work" value={inputField} placeholder="Enter what u need to do" className="Work py-3 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                         <input type="submit" value="Submit" className="bg-white px-3 py-3 border border-4 border-light border-opacity-10 rounded-2" id='SubmitBtn' onClick={setWork}/>
                         </form>
                       
                      </div>
                      <div className='bg-light container text-black py-2' id='changeText'>
                         {toDoList.length === 0? "No task left for now" : toDoList.length + " task Pending"}
                      </div>
                     </div>
                     </>
                
    )

}

export default Form;