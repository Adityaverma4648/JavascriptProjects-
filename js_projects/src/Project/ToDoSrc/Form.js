import {useState} from 'react';
import CountdownTimer from "../ToDoSrc/CountdownTimer";


function Form(props){
 
  const [inputField ,setInputField ] = useState('');
  
  const InputHandler = (e) =>{
         setInputField(e.target.value);
  }

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return(           
                     <div className='d-flex flex-column container-fluid'>
                          <div className="container formCont bg-none d-flex flex-column" >

                          {/* timer  */}
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                        
                          
                        {/*  form */}
                         <form action="" className='d-flex container justify-content-center align-items-center'>
                         <input type="text" onChange={InputHandler} name="Work" value={inputField.work} placeholder="Enter what u need to do" className="Work py-3 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                         <input type="submit" value="Submit" className="bg-white px-3 py-3 border border-4 border-light border-opacity-10 rounded-2" id='SubmitBtn' />

                         </form>
                      </div>
                     </div>
                
    )

}

export default Form;