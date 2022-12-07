import { useState } from "react";
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import cart from "./cart.json"
import Heart from "./Heart";
import Cart from "./Cart";


const ProCard = (props) => {
  return (

        <div className="d-flex flex-column m-1 proCard my-5 mx-1">
    <div className="iconCont d-flex justify-content-between align-items-center">
      <Heart key={props.data.id} data={props.data} />
      <Cart key={props.data.id+1} data={props.data} />
    </div>
     <div>
             <div className="images" style={{userSelect : "none", PointerEvent:"none"}}>
                  <img src={props.data.images[0]} alt={props.data.title} />
             </div>
             <div className="bg-black text-black text-center myText">
                <div className="container-fluid" style={{overflow : "hidden",height:"20px"}} >
                {props.data.title}
                </div>
                <div>
                        <small className="text-black">
                          Discount percentage : {props.data.discountPercentage} %
                        </small>
                 </div>
                 <div className="text-black py-2 text-decoration-underline" style={{fontWeight : "700"}}>
                        {props.data.price} $ only/-
                 </div>
             </div>
     </div>        
    </div>
  )
}

export default ProCard