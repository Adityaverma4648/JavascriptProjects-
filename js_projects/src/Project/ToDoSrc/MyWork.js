
import { useState } from "react";
import {FaTrash} from "react-icons/fa";
import {FaPen} from "react-icons/fa";

const MyWork = ({work}) => {

const [edit ,setEdit] = useState("")
const selectedID = 0;


const handleChange = (e)=>{
  setEdit(e.target.value)
}

const handleChecker =(e)=>{
  var inp = document.getElementById(work.id);
  var todo = document.querySelectorAll('.todo');
  var editBtn = document.querySelector(".editBtn");
  var btnGrp = document.querySelectorAll(".btn-group")


  var index = work.id-1;
  if(inp.checked){
      todo[index].classList.add("text-decoration-line-through","text-success");
      editBtn.classList.add("disabled","text-danger")
      btnGrp[index].style.visibility="hidden";
    }
    else{
      todo[index].classList.remove("text-decoration-line-through","text-success");
      editBtn.classList.remove("disabled","text-danger")
      btnGrp[index].style.visibility="visible";
    }
}
const onEdit = (e)=>{
  var todo = document.querySelectorAll('.todo');
  var pen = document.querySelectorAll("#penIcon");
  var editButtonSubmit = document.createElement("BUTTON")
  var editBtn = document.querySelector(".editBtn")
  var text = document.createTextNode("editWork")

  pen[work.id-1].style.display = "none" 
  editButtonSubmit.setAttribute("class","editButtonSubmit")
  editButtonSubmit.appendChild(text)
  editBtn[work.id -1].appendChild(editButtonSubmit)  
    //  todo[work.id-1].innerHTML = edit;

  }
const onDel = (e)=>{  
        work.filter(wrk => wrk )

}
  return (
    <div className='border border-bottom-1 bottom-dark myitem d-flex flex-wrap'>
    {/* {console.log(work)} */}
    <input type="checkbox" value={work.id} name={work.task} id={work.id} onChange={handleChecker} className="large" />


    <p className='h5 todo' >{work.task}</p>
       <p className='btn-group justify-content-end'>
       <input type="text" name="editInp" className="editInp" value={edit} onChange={handleChange} />

       <button className="bg-transparent border-0 px-2 text-white editBtn" style={{fontSize:"21px"}} onClick={onEdit}><FaPen id="penIcon" /></button>
       <button className="trash bg-transparent border-0 px-2 text-white" style={{fontSize:"21px"}} onClick={onDel}><FaTrash /></button>
       </p>
    </div>
  )
}

export default MyWork