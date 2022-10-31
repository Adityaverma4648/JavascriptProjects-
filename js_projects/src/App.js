import AppRouting from "./AppRouting";
import "../src/Component.css"
import { FaStream } from "react-icons/fa"
// import './App.css';


function App(){

     const ToggleNav = () =>{
          // return()
          var li =  document.getElementsByClassName('.navlinks');
          li.style.display = "block";
     }


  return ( 
     

    <div className="App">
      
        <div className="navbar container-fluid d-flex align-items-center justify-content-between ">
        <div className="text-center px-2">
           <h3>
               1_FootInArt
           </h3>
        </div>
            <ul className="navlists px-5">
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/" className='text-dark text-decoration-none px-2 py-1'>Home</a>  
                    </li>
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/MusicPlayer" className='text-dark text-decoration-none px-2 py-1'>MusicPlayer</a>
                    </li>
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/ToDoList" className='text-dark text-decoration-none px-2 py-1'>ToDoList</a>
                    </li>
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/Ecommerce" className='text-dark text-decoration-none px-2 py-1'>Ecommerce</a>
                    </li>
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/ResponsiveBlogSite" className='text-dark text-decoration-none px-2 py-1'>ResponsiveBlogSite</a>
                    </li>
                    <li className="navlinks px-1">
                         <a href="http://localhost:3000/ArtDisplay" className='text-dark text-decoration-none px-2 py-1'>ArtDisplay</a>
                    </li>
                    <div className="px-2 myBurger">
                       <FaStream className='burger' onClick={ToggleNav} />
                    </div>
                 </ul>    
               
        </div>
        
        <div className='py-5'> 
        <AppRouting />
        </div>

    </div>
  );

}

export default App;
