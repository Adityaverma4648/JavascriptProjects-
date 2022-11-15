import Category  from "./E-commerce/Category";
import TopDeals from "./E-commerce/TopDeals";
import '../Component.css' 



const Ecommerce = () =>{

    return(
        <div className="EcommerceCont text-white container-fluid d-flex justify-content-center align-items-center flex-column bg-black py-4">
                 <Category />
                 <TopDeals />
       </div>
    )

}

export default Ecommerce;