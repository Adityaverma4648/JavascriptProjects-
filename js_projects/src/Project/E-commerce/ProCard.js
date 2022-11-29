import { useState } from "react"
import {FaHeart} from "react-icons/fa"


const ProCard = (props) => {

  const [liked , setLiked ] = useState(false);
  const clickHeart = ()=>{
    var clickHeartCont = document.querySelector(".clickHeartCont");
    clickHeartCont.classList.add("text-danger")
    setLiked(true);
  }
  return (
    <div className="d-flex flex-column m-1 proCard">
    <div className="position-absolute text-secondary px-2 py-1 clickHeartCont" style={{zIndex : "3",fontSize:"25px",cursor:"pointer"}} onClick={clickHeart}>
           <FaHeart />
    </div>
     <div className="position-relative">
             <div className="images">
                  <img src={props.data.images[0]} alt={props.data.title} />
             </div>
             <div className="bg-black text-warning text-center">
                <div>
                {props.data.title}
                </div>
                <div>
                        <small className="text-success">
                          Discount percentage : {props.data.discountPercentage} %
                        </small>
                 </div>
                 <div className="text-info py-2 text-decoration-underline">
                        {props.data.price} $ only/-
                 </div>
             </div>
     </div>        
    </div>
  )
}

export default ProCard