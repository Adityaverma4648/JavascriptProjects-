import { useState } from "react";
import Btn from "../Project/calculator/Btn"

const Calculator = () => {


  const myNum = ["C","+-","%","/","7","8","9","X","4","5","6","-","1","2","3","+","0",".","="];
 
  return (
    <div className="container-fluid bg-black d-flex align-items-center justify-content-center text-white" style={{height : "100vh"}}>
           <div className="bg-secondary CalCont d-flex flex-column" style={{height : "50vh", width: "40vw"}}>
           <div id="display" className="text-end px-3 bg-dark text-white py-4">
                 total
           </div>
                 <div className="d-flex flex-wrap justify-content-center 
                  numBtnCont align-items-center" style={{minHeight : "30vh", width: "100%"}}>
                 {myNum.map(num => {
                       return(<Btn key={num} num={num} />)
                   })}
                 </div>

           </div>
    </div>

  )
}

export default Calculator