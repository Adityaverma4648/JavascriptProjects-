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
            console.log(item)
            const categoryName = item.name;
            const id =item.id
            let catCont = document.getElementById("catCont");
            const content = '<small id="'+ id +'">'+ categoryName +'</small>'
            catCont.innerHTML += content

        })
    })
	.catch(err => console.error(err)); 

  return (
    <div id="catCont" className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
        
    </div>
  )
}


export default Category;