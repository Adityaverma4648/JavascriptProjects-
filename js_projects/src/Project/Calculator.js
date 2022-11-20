import { useState } from "react";

const Calculator = () => {

  const [state,setState] = useState('0');

  const Number =()=>{
    const arr=[0,1,2,3,4,5,6,7,8,9];
    arr.map((ar)=>{
          const myNumber = document.querySelector('.myNumber');
          const content = '<div onClick={'+ this.setState((state)=>({
            state: ar
          })) +'}> '+ ar +' </div>' 
          myNumber.innerHTML += content;
    })
  }
  
      console.log(Number)
  return (
    <div className="container-fluid bg-black d-flex align-items-center justify-content-center text-white display-1" style={{height : "40vh"}}>
            <div className="myDisplay"></div>
            <div className="container">
              <div className="myNumber bg-white">

              </div>
            </div>
    </div>

  )
}

export default Calculator