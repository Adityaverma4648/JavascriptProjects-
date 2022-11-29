import Category from '../Project/E-commerce/Category';
import TopDeals from "../Project/E-commerce/TopDeals"

import '../Component.css' 



const Ecommerce = () =>{

    return(
        <div className="EcommerceCont text-white container-fluid d-flex justify-content-center align-items-center flex-column bg-black py-4">
                 <TopDeals />
       </div>
    )

}

export default Ecommerce;