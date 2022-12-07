import React from 'react'
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import { useState } from "react";
import list from "./liked.json"



const Heart = (props) => {

  const [liked , setLiked ] = useState(false);
  const [likedList] = useState(list);


  const clickHeart = (e)=>{
    var HeartIcon = document.querySelectorAll('.HeartIcon');

    if(liked){
    setLiked(false);
      HeartIcon[props.data.id-1].classList.remove("text-danger","HeartIconClicked")
      likedList.pop({ id: likedList.length + 1, data:props.data,  complete: false });
     }
     else{
      setLiked(true);
      HeartIcon[props.data.id-1].classList.add("text-danger","HeartIconClicked")
      likedList.push({ id: likedList.length + 1, data:props.data,  complete: false });}
      console.log(likedList)
    }


  return (
     <div className="px-2 py-1 clickHeartCont text-black" style={{fontSize:"25px",cursor:"pointer"}} onClick={clickHeart}>
           <FaHeart className="HeartIcon"/>
    </div>
  )
}

export default Heart