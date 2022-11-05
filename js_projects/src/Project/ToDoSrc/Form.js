import {useState} from 'react';
import CountdownTimer from "../ToDoSrc/CountdownTimer";


function Form(props){
 
  const [inputField ,setInputField ] = useState('');
  
  const InputHandler = (e) =>{
         setInputField(e.target.value);
  }
  var data = props.inputField
  // const MakeWork = () =>{
  //   var AddedForm = document.getElementById("AddedForm");
  //   var Cont = document.createElement("div")
  //   Cont.classList.add("bg-secondary","text-white","container","d-flex","flex-column" );
  //   var checker = document.createElement("input");
  //   checker.type ="checkbox"
  //   checker.className = "py-3 px-2 border-1 border-dark bg-secondary"
  //   var title = document.createElement("p");
  //   title.classList.add("text-danger","px-2","py-3");
  //   title.innerHTML = inputField;
    
  //   AddedForm.append(Cont)
     
  //   Cont.appendChild(checker);
  //   Cont.appendChild(title);
  // )


  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return(           
                     <div className='d-flex flex-column container-fluid'>
                        <div className="container p-2">
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                       </div>   
                       <div className="container formCont bg-none">
                       
                        <input type="text" onChange={InputHandler} name="Work" value={inputField.work} placeholder="Enter what u need to do" className="Work py-4 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                        <input type="submit" value="Submit" className="bg-white px-3 py-4 border border-4 border-light border-opacity-10 rounded-2" id='SubmitBtn' />

                      </div>
                     </div>
                
    )

}

export default Form;