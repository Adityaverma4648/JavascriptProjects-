import { FaHeart } from "react-icons/fa";

const Category = () => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

fetch('https://amazon24.p.rapidapi.com/api/category?country=US', options)
	.then(response => response.json())
	.then(response => {
        response.map((item) =>{
            // const 
        })
    })
	.catch(err => console.error(err)); 

  return (
    <div id="catCont" className="">
         {/* <div id="cat"></div> */}
    </div>
  )
}


export default Category;