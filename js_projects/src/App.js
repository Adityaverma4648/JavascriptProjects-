import './App.css';
import Navbar from './Navbar';
import MusicPlayer from '../src/Project/MusicPlayer'
import LiMaker from './LiMaker';
import Comp from './Comp';



function App(props) {

  console.log(props.data)

  return (

    <div className="App">
 
         <div>
         <Navbar />
         </div>

        <div className="container-fluid bg-danger content row d-flex justify-content-center align-items-center">
           <div className="col-sm-2 bg-warning">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis modi nostrum quo eos laboriosam sed officia, nulla qui velit, nihil aspernatur quam obcaecati ratione ab harum iure temporibus explicabo esse deleniti iusto expedita! Tempora expedita quo provident dolorum soluta autem unde iusto! Mollitia voluptas illum sit, officia similique esse nulla natus placeat consectetur aperiam consequatur in eaque magnam tempora excepturi labore numquam impedit. Saepe excepturi facere maxime.
           </div>
           <div className="col-sm-8 bg-info">
                <MusicPlayer />
           </div>
  
        </div>
       <div>
           {/* <Api /> */}
       </div>
    </div>
  );

}

export default App;
