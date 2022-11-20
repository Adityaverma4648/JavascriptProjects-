import {useState} from 'react'
const Btn = ({num}) => {

    const [state , setState] = useState('');
 
    const updateState = (e)=>{
        console.log(num)
      }

  return (
    <div className="d-flex justify-content-center align-items-center numBtn border border-1 border-dark" id={num} style={{width:"25%",height:"28%",cursor:"pointer"}} onClick={updateState}>{num}</div>
  )
}

export default Btn;