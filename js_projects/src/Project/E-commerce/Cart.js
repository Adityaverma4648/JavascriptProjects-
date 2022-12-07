import React from 'react'
import { useState } from "react";
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import cart from "./cart.json";

const Cart = (props) => {

    const [added,setAdded] = useState("false")
    const [addedList] = useState(cart);
    var cartIcon = document.getElementById("cartIcon")

    // const clickCart = ()=>{
    //     var cartIcon= document.querySelectorAll('.cartIcon')
    //     if(!added){
    //         setAdded(true)
    //        cartIcon[props.data.id].classList.add("text-success")
    //       cartIcon[props.data.id-1].classList.add("cartIconClicked")
    //       addedList.push({ id: addedList.length + 1, data:props.data,  complete: false });
    //       console.log()
    //     }
    //     else{
    //       setAdded(false)
    //       cartIcon[props.data.id-1].classList.remove("text-success")
    //       cartIcon[props.data.id-1].classList.remove("cartIconClicked")
    //     }
    
    //   }

    // cartIcon.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //        alert();
    // })

  return (
    <div className="px-2 py-1 clickCartCont text-black" style={{fontSize:"25px",cursor:"pointer"}}>
    <FaShoppingCart className="cartIcon" id={props.key}/>
     </div>
  )
}

export default Cart;