import React from "react";
import SongCard from "../Project/musicPLayer/SongCard"
import '../Component.css' 

const MusicPlayer = () =>{
  return(
     <div className="compCont">
          <div className="introMusicPlayer container-fluid bg-black" >
                <h1 className="headingMusicPlayer">
                Music Player 
                </h1>
                <div className="SongCards" >
                    <SongCard />
                </div>

          </div>
     </div>
  ) 

}

// class MusicPLayer extends React.Component{
//    render(){
//       return <div>Hello from Music Player </div>
      
//    }
// }

export default MusicPlayer;