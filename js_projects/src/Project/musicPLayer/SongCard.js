// import Api from ".../Api"
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";
const SongCards = () =>{
   
        const scrollRight = ()=>{
            var songCards = document.querySelector('.songCards')
            songCards.scrollLeft += 400; 
            songCards.style.transition = "all 0.2s ease-in-out"
        } 
        const scrollLeft = ()=>{
            var songCards = document.querySelector('.songCards')
            songCards.scrollLeft -= 400; 
        } 
     
     
        const options = {
             method: 'GET',
             headers: {
               'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
               'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
             }
        };

            fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
              .then(response => response.json())
              .then(data => {
                  
                // individual data

                const list = data
                list.map((item)=>{
                    // console.log(item)
                    const title = item.title;
                    const artist = item.artists;
                    const image = item.images.coverart;
                    const music = item.url;
                  
                    console.log(item)

                    const card = '<div><a href="'+ music +'"><img src = "'+ image + '" alt = "' + title +'"> <small>' + title + '</small></a></div>' 

                     var songCards = document.querySelector('.songCards')
                     songCards.innerHTML += card;  
                })
              })
              .catch(err => console.error(err));
   return (
    <div className="d-flex flex-column">
       <div className="container-fluid d-flex align-items-center" >
              <button type="button" className="ScrollBtn leftBtnScroll bg-info px-3 py-4 " onClick={scrollLeft}>
                   <FaAngleDoubleLeft />
            </button>
         <div className="container-fluid SongCardCont d-flex align-items-center justify-content-center ">
               <div className="songCards text-white"></div>
         </div> 
             <button type="button" className="rightBtnScroll ScrollBtn bg-info px-3 py-4" onClick={scrollRight}>
                   <FaAngleDoubleRight />
            </button>

     </div>
    </div>
   )
}

export default SongCards;