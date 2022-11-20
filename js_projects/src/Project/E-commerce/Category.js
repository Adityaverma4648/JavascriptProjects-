import { FaHeart } from "react-icons/fa";

const Category = () => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

fetch('https://ososedki.com/photos/-199066090_288101022', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err)); 

  return (
    <div id="catCont" className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
    </div>
  )
}


export default Category;