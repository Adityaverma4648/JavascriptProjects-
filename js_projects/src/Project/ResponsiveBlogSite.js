import "../Component.css" 
import {FaBrush} from "react-icons/fa"; 
import {FaGamepad} from "react-icons/fa";
import {FaReact} from "react-icons/fa"; 
import {FaVolleyballBall} from "react-icons/fa"; 
import {useState} from "react"
import MyReact from "../Project/ResponsiveBlog/MyReact";

const ResponsiveBlogSite = () =>{
  const [state,setState] = useState("ArtBlog");
  

  const handleChange = (e)=>{
    var btn = document.querySelectorAll("button");
    console.log(btn[0].getAttribute("title"));
    // btn.getAttribute("type")
    //  setState({})
  }
  return(
 
    <div className="bg-black response d-flex flex-column py-3">
              <h3 className="py-2 container-fluid text-white">
                Responsive Blog Site
              </h3>
              <div className="btnCont bg-dark text-white categories position-relative d-flex justify-content-center align-items-center py-3 position-stt" >
                    <h1 className="text-secondary position-relative myHead opacity-25">
                      CATEGORIES
                    </h1>
                    <div className="position-absolute py-2">
                      <div className="p-1 d-flex justify-content-center">
                      <button type="button" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="top" title="ArtBlog" onClick={handleChange}>
                        <FaBrush className="icon"/>
                    </button>
                    <button type="button" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="right" title="GamingBlog" onClick={handleChange}>
                        <FaGamepad  className="icon" />
                    </button>
                   </div>
                     <div className="p-1" >
                      <button type="button" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="bottom" title="ReactBlog" onClick={handleChange}>
                        <FaReact  className="icon" />
                      </button>
                      <button type="button"className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="right" title="SportsBlog" id="sports"  onClick={handleChange}>
                        <FaVolleyballBall className="icon"/>
                      </button>
                     </div>
                    </div>
              </div>
              <div className="FetchContent bg-black text-center" id = "FetchContent container-fluid">
              </div>
          </div>
 
  ) 

}

export default ResponsiveBlogSite;