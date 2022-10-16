// import React from 'react';
const myJson = require('./Files.json');

function LiMaker(props)
{

    function removeExtension(filename) {
        return filename.substring(0, filename.lastIndexOf('.')) || filename;
      }
 
    const updatedList = myJson.map((listItems)=>{
        return <li>{removeExtension(listItems)}</li>;
    });
  
    return(
        <ul>{updatedList}</ul>
    );
}

export default LiMaker;