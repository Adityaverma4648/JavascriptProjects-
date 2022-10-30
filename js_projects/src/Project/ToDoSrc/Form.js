import {useState} from 'react';

function Form(){
 
  const [inputField ,setInputField ] = useState('');
  
  const InputHandler = (e) =>{
         setInputField(e.target.value);
  }

  // // const onClickAdd = () => {
  //      var   AddedWork = document.getElementById("AddedWork");
  //      AddedWork.classList.add("myWork");
  //      AddedWork.classList.add("container-fluid");
  //      AddedWork.innerHTML = inputField
  // // }
  //     var SubmitBtn = document.getElementById('SubmitBtn');
  //     // SubmitBtn.addEventListener = ("onClick")



    return(           

                     <div className='d-flex flex-column container-fluid'>
                       
                       <div id="AddedWork"></div>


                       <div className="container formCont bg-none">
                       

                        <input type="text" onChange={InputHandler} name="Work" value={inputField.work} placeholder="Enter what u need to do" className="Work py-4 border border-4 border-opacity-10 border-light rounded-2" id="Work" />

                        <input type="submit" value="Submit" className="bg-white px-1 py-4 border-4 border-white border-opacity-50" id='SubmitBtn'/>

                      </div>
                     </div>
                
    )

}

export default Form;