import { useState } from "react";

const Calculator = () => {


  const myNum = ["C","+-","%","/","7","8","9","X","4","5","6","-","1","2","3","+","0",".","="];
 
  const [state , setState] = useState();
    const [prevState , setPrevState] = useState("")
 
    const updateState = (e)=>{
        e.preventDefault();
        setState(e.target.id) 
        console.log(state)
      }


  return (
    <div className="container-fluid bg-black d-flex align-items-center justify-content-center text-white" style={{height : "100vh"}}>
           <div className="bg-secondary CalCont d-flex flex-column" style={{height : "50vh", width: "40vw"}}>
           <input id="display" className="text-end px-3 bg-dark text-white py-4">
           </input>
                 <div className="d-flex flex-wrap justify-content-center 
                  numBtnCont align-items-center" style={{minHeight : "30vh", width: "100%"}}>
                 {myNum.map(num => {
                       return(  <button type='button' className="d-flex justify-content-center align-items-center numBtn border border-1 border-dark text-center" id={num} style={{width:"25%",height:"28%",cursor:"pointer",fontWeight : "900"}} value={num}  onClick={updateState}>{num}</button>)
                   })}
                 </div>

           </div>
    </div>

  )
}

export default Calculator