
import { useState } from "react";
import {FaTrash} from "react-icons/fa";
import {FaPen} from "react-icons/fa";

const MyWork = ({work}) => {

const [edit ,setEdit] = useState("")

const handleChange = (e)=>{
  setEdit(e.target.value)
}

const handleChecker =(e)=>{
  var inp = document.getElementById(work.id);
  var todo = document.querySelectorAll('.todo');
  var editInp = document.querySelector(".editInp");
  var editBtn = document.querySelector(".editBtn");


  var index = work.id-1;
  if(inp.checked){
      todo[index].classList.add("text-decoration-line-through","text-success");
      editBtn.classList.add("disabled","text-danger")
    }
    else{
      todo[index].classList.remove("text-decoration-line-through","text-success");
      editBtn.classList.remove("disabled","text-danger")
    }
}
const onEdit = (e)=>{
  var todo = document.querySelectorAll('.todo');
     todo[work.id-1].innerHTML = edit;

  }
const onDel = (e)=>{
    var index = work.id;
    delete work[index]
}
  return (
    <div className='border border-bottom-1 bottom-dark myitem d-flex flex-wrap'>
    {/* {console.log(work)} */}
    <input type="checkbox" value={work.id} name={work.task} id={work.id} onChange={handleChecker} />


    <p className='h5 todo' >{work.task}</p>
       <p className='btn-group justify-content-end'>
       <input type="text" name="editInp" className="editInp" value={edit} onChange={handleChange} />

       <button className="bg-transparent border-0 px-2 text-white editBtn" style={{fontSize:"21px"}} onClick={onEdit}><FaPen /></button>
       <button className="trash bg-transparent border-0 px-2 text-white" style={{fontSize:"21px"}} onClick={onDel}><FaTrash /></button>
       </p>
    </div>
  )
}

export default MyWork