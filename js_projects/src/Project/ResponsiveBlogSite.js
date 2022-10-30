import "../Component.css" 
import {FaBrush} from "react-icons/fa"; 
import {FaGamepad} from "react-icons/fa";
import {FaReact} from "react-icons/fa"; 
import {FaVolleyballBall} from "react-icons/fa"; 
import { useState } from "react";
import FetchComp from "./responsiveBlog/FetchComp"






const ResponsiveBlogSite = () =>{

   const Comp = ["ArtBlog","Gamepad","React","Volley"]

 
  const [state , setState] = useState(Comp[0]);
  
  return(
 
    <div className="compCont bg-black response d-flex flex-column py-4">
              <h3 className="py-2 container-fluid text-white">
                Responsive Blog Site
              </h3>
              <div className="btnCont bg-dark text-white categories position-relative d-flex justify-content-center align-items-center py-1" >
                    <h1 className="text-secondary position-relative myHead opacity-25">
                      CATEGORIES
                    </h1>
                    <div className="position-absolute">
                      <div className="p-2 d-flex justify-content-center">
                      <button type="button" className="border-0 p-3" data-toggle="tooltip" data-placement="top" title="Art Blog" id="brush" onClick={()=>{
                        setState({state : Comp[0]})
                      }}>
                        <FaBrush className="icon"/>
                    </button>
                    <button type="button" className="border-0 p-3" data-toggle="tooltip" data-placement="right" title="Gaming Blog" id="gaming" onClick={()=>{
                        setState({state : Comp[1]})
                      }}>
                        <FaGamepad  className="icon" />
                    </button>
                      </div>
                      <div className="p-2" >
                      <button type="button" className="border-0 p-3" data-toggle="tooltip" data-placement="bottom" title="React Dev Blog" id="react" onClick={()=>{
                        setState({state : Comp[2]})
                      }}>
                        <FaReact  className="icon" />
                    </button>
                    <button type="button" className="border-0 p-3" data-toggle="tooltip" data-placement="right" title="Sports Blog" id="sports" onClick={()=>{
                        setState({state : Comp[3]})
                      }}>
                        <FaVolleyballBall className="icon"/>
                    </button>
                      </div>
                    </div>
              </div>
              <div className="fetchContent bg-black text-center" id = "FetchContent">
                   <FetchComp data={state} />
              </div>
          </div>
 
  ) 

}

export default ResponsiveBlogSite;