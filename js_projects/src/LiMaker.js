import './Component.css';
const myJson = require('./Files.json');

const nav = "hi";

// () => {console.log(listItems)}

function LiMaker(props)
{    

    const ActiveNav = (name) => {
        //   this.nav = name;
          console.log(name)
          return name;
    }

    function removeExtension(filename) {
        return filename.substring(0, filename.lastIndexOf('.')) || filename;
      }

    const updatedList = myJson.map((listItems)=>{       
        return <li onClick= {() => ActiveNav(removeExtension(listItems))} className="mx-1" key={listItems} value={listItems}>
                   {removeExtension(listItems)} 
              </li>;
    });
  
    return(
        <ul className='d-flex'>{updatedList}</ul>
    );
    
}

export default LiMaker;
export const activeNav = nav;