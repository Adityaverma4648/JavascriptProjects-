import {useState } from "react";
import products from "./products.json";
import ProCard from "./ProCard";
import {FaHotjar} from "react-icons/fa"

const TopDeals = () => {
  const [data] = useState(products);
  return (
     <div className="d-flex flex-column products">
     {/*  myHeading  */}
     <div className="container-fluid px-2 display-6 text-bottom d-flex bg-info top-0 position-fixed align-items-center">
         <div className="text-gradient bg-danger sticky" style={{height:"20vh"}}>Top Deals</div>
     </div>
     {/*  My product fetcher */}
         <div className="d-flex flex-wrap justify-content-center align-items-center" style={{maxWidth:"100vw",padding:"10vh 0px",height:"auto"}}>
          {data?.map((items)=>{
              return <ProCard key={items.id} data={items} />
          })}
      </div>
     </div>
  );
}


export default TopDeals;