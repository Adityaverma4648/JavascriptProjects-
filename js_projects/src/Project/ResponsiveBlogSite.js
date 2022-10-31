import "../Component.css" 
import {FaBrush} from "react-icons/fa"; 
import {FaGamepad} from "react-icons/fa";
import {FaReact} from "react-icons/fa"; 
import {FaVolleyballBall} from "react-icons/fa"; 

const ResponsiveBlogSite = () =>{
  
  return(
 
    <div className="bg-black response d-flex flex-column py-3">
              <h3 className="py-2 container-fluid text-white">
                Responsive Blog Site
              </h3>
              <div className="btnCont bg-dark text-white categories position-relative d-flex justify-content-center align-items-center py-3 position-stt" >
                    <h1 className="text-secondary position-relative myHead opacity-25">
                      CATEGORIES
                    </h1>
                    <div className="position-absolute">
                      <div className="p-2 d-flex justify-content-center">
                      <a href="#ArtBlog" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="top" title="Art Blog">
                        <FaBrush className="icon"/>
                    </a>
                    <a href="#GamePad" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="right" title="Gaming Blog">
                        <FaGamepad  className="icon" />
                    </a>
                   </div>
                     <div className="p-2" >
                      <a href="#ReactBlog" type="button" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="bottom" title="React Dev Blog">
                        <FaReact  className="icon" />
                      </a>
                      <a href="#Volley" type="button" className="compBtn border-0 p-3" data-toggle="tooltip" data-placement="right" title="Sports Blog" id="sports">
                        <FaVolleyballBall className="icon"/>
                      </a>
                     </div>
                    </div>
              </div>
              <div className="FetchContent bg-black text-center" id = "FetchContent">
                 <div id="ArtBlog">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui et facilis quibusdam aliquam recusandae a! Perferendis totam vero odio eius iste enim minus modi id beatae impedit natus ab recusandae, suscipit ea eaque, aliquid, nulla ex illum explicabo voluptate magni aperiam odit dolores aspernatur. Exercitationem est, natus, debitis minus aliquam atque distinctio veritatis quasi aspernatur reiciendis aut libero porro nihil eveniet? Est nemo tenetur praesentium sed architecto eligendi?
                 </div>
                 <div id="GamePad">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui et facilis quibusdam aliquam recusandae a! Perferendis totam vero odio eius iste enim minus modi id beatae impedit natus ab recusandae, suscipit ea eaque, aliquid, nulla ex illum explicabo voluptate magni aperiam odit dolores aspernatur. Exercitationem est, natus, debitis minus aliquam atque distinctio veritatis quasi aspernatur reiciendis aut libero porro nihil eveniet? Est nemo tenetur praesentium sed architecto eligendi?
                 </div>
                 <div id="ReactBlog">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui et facilis quibusdam aliquam recusandae a! Perferendis totam vero odio eius iste enim minus modi id beatae impedit natus ab recusandae, suscipit ea eaque, aliquid, nulla ex illum explicabo voluptate magni aperiam odit dolores aspernatur. Exercitationem est, natus, debitis minus aliquam atque distinctio veritatis quasi aspernatur reiciendis aut libero porro nihil eveniet? Est nemo tenetur praesentium sed architecto eligendi?
                 </div>
                 <div id="Volley">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui et facilis quibusdam aliquam recusandae a! Perferendis totam vero odio eius iste enim minus modi id beatae impedit natus ab recusandae, suscipit ea eaque, aliquid, nulla ex illum explicabo voluptate magni aperiam odit dolores aspernatur. Exercitationem est, natus, debitis minus aliquam atque distinctio veritatis quasi aspernatur reiciendis aut libero porro nihil eveniet? Est nemo tenetur praesentium sed architecto eligendi?
                 </div>
              </div>
          </div>
 
  ) 

}

export default ResponsiveBlogSite;