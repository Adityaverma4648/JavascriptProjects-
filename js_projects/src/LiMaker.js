import React, {useState} from 'react';
import './Component.css';
import Comp from './Comp';
import App from '../src/App.js'


const myJson = require('./Files.json');

function LiMaker()
{    
    const [state, setstate] = useState({data:""})
  
     const changeState = (myNav) => {  
           setstate({data: myNav}); 
           console.log(myNav)
       }; 

    // onClick= {this.ActiveNav(removeExtension(listItems))}

    function removeExtension(filename) {
        return filename.substring(0, filename.lastIndexOf('.')) || filename;
      }

    const updatedList = myJson.map((listItems)=>{       
        return <li onClick= {() => changeState(removeExtension(listItems))} className="mx-1" key={listItems} value={listItems}>
                   {removeExtension(listItems)} 
              </li>;
    });
  
    return(
        <div>
          <ul className='d-flex'>{updatedList}</ul>
        </div>
    );
    
}


export default LiMaker;
