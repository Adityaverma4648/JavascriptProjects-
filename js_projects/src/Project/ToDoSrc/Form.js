import {useState} from 'react';
import Timer from "../ToDoSrc/Timer";

function Form(props){

  const defaultToDoWork = [
    {work : "Learning React"},
    {work : "get an internship"},
  ]
 
  const [inputField ,setInputField ] = useState('');
  
  const InputHandler = (e) =>{
         setInputField(e.target.value);
  }

  const setWork = (e)=>{
      e.preventDefault();
      const  myWork = document.getElementById('myWork');
      const work = '<div><input type="checkbox" name='+ inputField +' /><p>'+ inputField +'</p><span></Timer ></span></div>' 
      myWork.innerHTML += work;
  }

    return(          <>
                     <div className="container-fluid d-flex flex-column" id='myWork'>
                          {/*  default */}
                          <div><input type="checkbox" name={defaultToDoWork[0].work} /><p>{defaultToDoWork[0].work}</p><Timer /></div>
                          <div><input type="checkbox" name={defaultToDoWork[1].work} /><p>{defaultToDoWork[1].work}</p><Timer /></div>
                  
                     </div>
                     <div className='d-flex flex-column container-fluid'>
                          <div className="container formCont bg-none d-flex flex-column" >
                        {/*  timer */}
                       <div className='py-2 bg-white text-black' >
                       </div>
                        {/*  form */}
                         <form action="" className='d-flex container justify-content-center align-items-center'>
                         <input type="text" onChange={InputHandler} name="Work" value={inputField} placeholder="Enter what u need to do" className="Work py-3 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                         <input type="submit" value="Submit" className="bg-white px-3 py-3 border border-4 border-light border-opacity-10 rounded-2" id='SubmitBtn' onClick={setWork}/>
                         </form>
                       
                      </div>
                     </div>
                     </>
                
    )

}

export default Form;