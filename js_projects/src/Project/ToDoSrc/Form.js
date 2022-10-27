import {useState} from 'react';

function Form(){
 
  const [inputField ,setInputField ] = useState({
       work : ''
  })
  
  const InputHandler = (e) =>{
         setInputField({[e.target.work] : e.target.value})
  }

  const OnSubmit = () => {
      alert(inputField.work);
  }

    return(
                      <div className="continer formCont bg-none">
{/*                        
                        <div className="timer">
                                
                        </div> */}

                        <input type="text" onChange={InputHandler} name="Work" value={inputField.work} placeholder="Enter what u need to do" className="Work py-4 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                        <input type="submit" value="Submit" onClick={OnSubmit} className="bg-white px-1 py-4 border-4 border-white border-opacity-50"/>
                      </div>
                
    )

}

export default Form;