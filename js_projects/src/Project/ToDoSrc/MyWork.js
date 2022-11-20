
import {FaTrash} from "react-icons/fa";
import {FaPen} from "react-icons/fa";

const myWork = ({work}) => {

const handleChecker =(e)=>{
  var inp = document.getElementById(work.id);
  var todo = document.querySelectorAll('.todo')
  var index = work.id-1;
  if(inp.checked){
      todo[index].classList.add("text-decoration-line-through","text-danger");
    }
    else{
      todo[index].classList.remove("text-decoration-line-through","text-danger");
    }
}

const onEdit = (e)=>{
     
}

  return (
    <div className='border border-bottom-1 bottom-dark myitem'>
    {/* {console.log(work)} */}
    <input type="checkbox" value={work.id} name={work.task} id={work.id} onChange={handleChecker} />
    <p className='h5 todo' >{work.task}</p>
       <p className='btn-group justify-content-end'>
       <button className="bg-transparent border-0 px-2 text-white" style={{fontSize:"21px"}} onClick={onEdit}><FaPen /></button>
       <button className="bg-transparent border-0 px-2 text-white" style={{fontSize:"21px"}}><FaTrash /></button>
       </p>
    </div>
  )
}

export default myWork