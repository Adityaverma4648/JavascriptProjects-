import './Component.css';
const myJson = require('./Files.json');

function LiMaker(props)
{

    function removeExtension(filename) {
        return filename.substring(0, filename.lastIndexOf('.')) || filename;
      }
 
    const updatedList = myJson.map((listItems)=>{
        return <li className="mx-1">{removeExtension(listItems)}</li>;
    });
  
    return(
        <ul className='d-flex'>{updatedList}</ul>
    );
}

export default LiMaker;