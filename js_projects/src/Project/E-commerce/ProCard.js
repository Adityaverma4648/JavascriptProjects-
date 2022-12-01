import { useState } from "react";
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import list from "./liked.json"
import cart from "./cart.json"


const ProCard = (props) => {
  const [added,setAdded] = useState("false")
  const [liked , setLiked ] = useState(false);
  const [likedList] = useState(list);
  const [addedList] = useState(cart);


  const clickHeart = (e)=>{
    var HeartIcon = document.querySelectorAll('.HeartIcon');

    if(liked){
    setLiked(false);
      HeartIcon[props.data.id-1].classList.remove("text-danger","HeartIconClicked")
     }
     else{
      setLiked(true);
      HeartIcon[props.data.id-1].classList.add("text-danger","HeartIconClicked")
      likedList.push({ id: likedList.length + 1, data:props.data,  complete: false });}
      console.log(likedList)
    }
  const clickCart = ()=>{
    var cartIcon= document.querySelectorAll('.cartIcon')
    if(!added){
        setAdded(true)
       cartIcon[props.data.id-1].classList.add("text-success")
      cartIcon[props.data.id-1].classList.add("cartIconClicked")
      addedList.push({ id: addedList.length + 1, data:props.data,  complete: false });
      console.log()
    }
    else{
      setAdded(false)
      cartIcon[props.data.id-1].classList.remove("text-success")
      cartIcon[props.data.id-1].classList.remove("cartIconClicked")
    }

  }
  return (

        <div className="d-flex flex-column m-1 proCard my-5 mx-1">
    <div className="iconCont d-flex justify-content-between align-items-center">
    <div className="px-2 py-1 clickHeartCont text-black" style={{fontSize:"25px",cursor:"pointer"}} onClick={clickHeart}>
           <FaHeart className="HeartIcon"/>
    </div>
    <div className="px-2 py-1 clickCartCont text-black" style={{fontSize:"25px",cursor:"pointer"}} onClick={clickCart}>
           <FaShoppingCart className="cartIcon" />
    </div>
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